import React from "react";
import PropTypes from "prop-types";

const Main = ({ activeNote, onUpdateNote, onDeleteNote }) => {
  const onEditField = (field, value) => {
    onUpdateNote({
      ...activeNote,
      [field]: value,
    });
  };

  if (!activeNote) return <div className="no-active-note">No Active Note</div>;

  return (
    <div className="app-main">
      <div className="app-main-note-edit">
        <div>
          <input
            type="text"
            id="title"
            placeholder="Add a title"
            value={activeNote.title}
            onChange={(e) => onEditField("title", e.target.value)}
          />
          <hr className="custom-hr" />
          <textarea
            style={{ width: "100%", height: "100%" }}
            id="body"
            placeholder="Write your note here..."
            value={activeNote.body}
            onChange={(e) => onEditField("body", e.target.value)}
          />
        </div>
        <div className="app-main-note-buttons">
          <button
            className="delete-note"
            onClick={() => onDeleteNote(activeNote.id)}
          >
            Delete note
            <svg
              style={{ marginLeft: "14px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="18"
              viewBox="0 0 14 18"
              fill="none"
            >
              <g clipPath="url(#clip0_4774_10)">
                <path
                  d="M1 16C1.00158 16.5299 1.2128 17.0377 1.58753 17.4125C1.96227 17.7872 2.47005 17.9984 3 18H11C11.5299 17.9984 12.0377 17.7872 12.4125 17.4125C12.7872 17.0377 12.9984 16.5299 13 16V6C12.9984 5.47005 12.7872 4.96227 12.4125 4.58753C12.0377 4.2128 11.5299 4.00158 11 4H3C2.47005 4.00158 1.96227 4.2128 1.58753 4.58753C1.2128 4.96227 1.00158 5.47005 1 6V16ZM13 1H10.5L9.79 0.29C9.6032 0.106068 9.35215 0.00206033 9.09 0H4.91C4.64785 0.00206033 4.3968 0.106068 4.21 0.29L3.5 1H1C0.734784 1 0.48043 1.10536 0.292893 1.29289C0.105357 1.48043 0 1.73478 0 2C0 2.26522 0.105357 2.51957 0.292893 2.70711C0.48043 2.89464 0.734784 3 1 3H13C13.2652 3 13.5196 2.89464 13.7071 2.70711C13.8946 2.51957 14 2.26522 14 2C14 1.73478 13.8946 1.48043 13.7071 1.29289C13.5196 1.10536 13.2652 1 13 1Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_4774_10">
                  <rect width="14" height="18" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
          <button className="save-note" onClick={() => onUpdateNote(activeNote)}>
            Save Changes
            <svg
              style={{ marginLeft: "14px" }}
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
            >
              <path
                d="M4.64002 11.054L1.72202 7.58599C1.62899 7.49165 1.51814 7.41675 1.39591 7.36562C1.27369 7.3145 1.14252 7.28817 1.01003 7.28817C0.877534 7.28817 0.746365 7.3145 0.624136 7.36562C0.501907 7.41675 0.391057 7.49165 0.298025 7.58599C0.203657 7.68034 0.128799 7.79235 0.0777261 7.91563C0.0266533 8.03891 0.000366211 8.17105 0.000366211 8.30449C0.000366211 8.43793 0.0266533 8.57006 0.0777261 8.69335C0.128799 8.81663 0.203657 8.92864 0.298025 9.02299L3.91803 13.199C4.01171 13.294 4.12334 13.3694 4.24642 13.4209C4.36951 13.4724 4.5016 13.4989 4.63503 13.4989C4.76845 13.4989 4.90054 13.4724 5.02363 13.4209C5.14671 13.3694 5.25834 13.294 5.35203 13.199L13.702 2.23699C13.7964 2.14264 13.8713 2.03063 13.9223 1.90735C13.9734 1.78406 13.9997 1.65193 13.9997 1.51849C13.9997 1.38505 13.9734 1.25291 13.9223 1.12963C13.8713 1.00635 13.7964 0.894335 13.702 0.799987C13.609 0.705654 13.4981 0.630748 13.3759 0.579622C13.2537 0.528495 13.1225 0.502167 12.99 0.502167C12.8575 0.502167 12.7264 0.528495 12.6041 0.579622C12.4819 0.630748 12.3711 0.705654 12.278 0.799987L4.64002 11.054Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

Main.propTypes = {
  activeNote: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }),
  onUpdateNote: PropTypes.func.isRequired,
  onDeleteNote: PropTypes.func.isRequired,
};

export default Main;
