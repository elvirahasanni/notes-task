import React from "react";
import PropTypes from "prop-types";

const Sidebar = ({
  categories,
  onAddCategory,
  onAddNote,
  activeCategory,
  setActiveCategory,
  activeNote,
  setActiveNote,
  onDeleteCategory,
}) => {
  const handleDeleteCategory = (categoryId) => {
    onDeleteCategory(categoryId);
    setActiveCategory(null);
  };

  const renderNotes = (notes) => (
    <div className="app-sidebar-notes">
      {notes.map(({ id, title, body }) => (
        <div
          key={id}
          className={`app-sidebar-note ${id === activeNote ? "active" : ""}`}
          onClick={() => setActiveNote(id)}
        >
          <div className="sidebar-note-title">
            <p>{title}</p>
          </div>
          <p>{body && body.substr(0, 100)}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="app-sidebar">
      <div style={{ width: "40%" }} className="categories-side">
        <div className="app-sidebar-header">
          <button className="create-btn" onClick={onAddCategory}>
            Create Category
            <span className="app-sidebar-header-span">
              <svg
                className="app-sidebar-header-plus"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className="app-sidebar-categories">
          {categories.map(({ id, name, notes }) => (
            <div
              key={id}
              className={`app-sidebar-category ${
                id === activeCategory ? "active" : ""
              }`}
              onClick={() => setActiveCategory(id)}
            >
              <div className="left-side-category">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="22"
                    viewBox="0 0 30 22"
                    fill="none"
                  >
                    <path
                      d="M2.25 22C1.65 22 1.125 21.788 0.675 21.3641C0.225 20.9401 0 20.4646 0 19.9375V2.0625C0 1.53542 0.225 1.0599 0.675 0.635938C1.125 0.211979 1.65 0 2.25 0H11.8125C12.1125 0 12.4062 0.0572917 12.6937 0.171875C12.9812 0.286458 13.225 0.435416 13.425 0.61875L15 2.0625H27.75C28.325 2.0625 28.8438 2.27448 29.3063 2.69844C29.7688 3.1224 30 3.59792 30 4.125V19.9375C30 20.4646 29.7688 20.9401 29.3063 21.3641C28.8438 21.788 28.325 22 27.75 22H2.25Z"
                      fill={id === activeCategory ? "#323338" : "#ffffff"}
                    />
                  </svg>
                </div>
                <div className="category-name">
                  {name} ({notes.length})
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                {id === activeCategory ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                  >
                    <path
                      d="M2.60762 11.0465L6.55327 7.07613C6.69487 6.93428 6.80722 6.76571 6.88388 6.58012C6.96054 6.39452 7 6.19553 7 5.99457C7 5.79361 6.96054 5.59463 6.88388 5.40903C6.80722 5.22343 6.69487 5.05487 6.55327 4.91301L2.6037 0.942687C2.38919 0.730097 2.11701 0.585905 1.8213 0.528191C1.52559 0.470476 1.21952 0.501807 0.941452 0.618259C0.663386 0.734711 0.425711 0.931099 0.25823 1.18279C0.0907491 1.43449 0.000917634 1.73029 -4.13811e-07 2.0331L-6.67149e-08 9.97374C0.00130082 10.2769 0.0919955 10.5729 0.260616 10.8242C0.429236 11.0755 0.668209 11.271 0.947318 11.3858C1.22643 11.5006 1.53314 11.5297 1.82867 11.4693C2.1242 11.4089 2.39527 11.2617 2.60762 11.0465Z"
                      fill="#323338"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="8"
                    viewBox="0 0 11 8"
                    fill="none"
                  >
                    <path
                      d="M0.453545 3.10762L4.42386 7.05327C4.56572 7.19487 4.73429 7.30722 4.91988 7.38388C5.10548 7.46054 5.30447 7.5 5.50543 7.5C5.70639 7.5 5.90537 7.46054 6.09097 7.38388C6.27657 7.30722 6.44513 7.19487 6.58699 7.05327L10.5573 3.1037C10.7699 2.88919 10.9141 2.61701 10.9718 2.3213C11.0295 2.0256 10.9982 1.71952 10.8817 1.44145C10.7653 1.16339 10.5689 0.925712 10.3172 0.758231C10.0655 0.59075 9.76971 0.500918 9.4669 0.5L1.52626 0.5C1.2231 0.501301 0.927139 0.591996 0.675795 0.760616C0.424451 0.929236 0.229014 1.16821 0.114195 1.44732C-0.000624443 1.72643 -0.0296677 2.03314 0.0307356 2.32867C0.0911389 2.6242 0.238277 2.89527 0.453545 3.10762Z"
                      fill="white"
                    />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeCategory && (
        <div style={{ width: "60%" }} className="notes-side">
          <div className="app-sidebar-header">
            <button onClick={onAddNote} className="create-btn">
              Create Note
              <span className="app-sidebar-header-span">
                <svg
                  className="app-sidebar-header-plus"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </span>
            </button>
            <button
              className="delete-category-btn"
              onClick={() => handleDeleteCategory(activeCategory)}
            >
              Delete Category
            </button>
          </div>
          {renderNotes(
            categories.find((category) => category.id === activeCategory)
              ?.notes || []
          )}
        </div>
      )}
    </div>
  );
};

Sidebar.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      notes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          title: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  onAddCategory: PropTypes.func.isRequired,
  onAddNote: PropTypes.func.isRequired,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func.isRequired,
  activeNote: PropTypes.string,
  setActiveNote: PropTypes.func.isRequired,
  onDeleteCategory: PropTypes.func.isRequired,
};

export default Sidebar;
