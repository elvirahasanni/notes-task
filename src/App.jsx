import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

function App() {
  const [categories, setCategories] = useState(() => {
    try {
      const storedCategories = localStorage.getItem("categories");
      return storedCategories ? JSON.parse(storedCategories) : [];
    } catch (error) {
      console.error("Failed to parse categories from localStorage:", error);
      return [];
    }
  });

  const [activeCategory, setActiveCategory] = useState(null);
  const [activeNote, setActiveNote] = useState(null);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(categories));
  }, [categories]);

  const onAddCategory = () => {
    const newCategory = {
      id: uuid(),
      name: "Category",
      notes: [],
    };
    setCategories([...categories, newCategory]);
  };

  const onDeleteCategory = (categoryId) => {
    setCategories(categories.filter((category) => category.id !== categoryId));
  };

  const onAddNote = () => {
    if (!activeCategory) return;

    const newNote = {
      id: uuid(),
      title: "Add a title",
      body: "Write your note here...",
    };

    const updatedCategories = categories.map((category) => {
      if (category.id === activeCategory) {
        return {
          ...category,
          notes: [newNote, ...category.notes],
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setActiveNote(newNote.id);
  };

  const onDeleteNote = (noteId) => {
    if (!activeCategory) return;

    const updatedCategories = categories.map((category) => {
      if (category.id === activeCategory) {
        return {
          ...category,
          notes: category.notes.filter(({ id }) => id !== noteId),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
    setActiveNote(null);
  };

  const onUpdateNote = (updatedNote) => {
    if (!activeCategory) return;

    const updatedCategories = categories.map((category) => {
      if (category.id === activeCategory) {
        return {
          ...category,
          notes: category.notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)),
        };
      }
      return category;
    });

    setCategories(updatedCategories);
  };

  const getActiveNote = () => {
    if (!activeCategory) return null;

    const category = categories.find(({ id }) => id === activeCategory);
    return category ? category.notes.find(({ id }) => id === activeNote) : null;
  };

  return (
    <>
      <div className="main-title">Your notes</div>
      <div className="App">
        <Sidebar
          categories={categories}
          onAddCategory={onAddCategory}
          onAddNote={onAddNote}
          onDeleteCategory={onDeleteCategory}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeNote={activeNote}
          setActiveNote={setActiveNote}
        />
        <Main
          activeNote={getActiveNote()}
          onUpdateNote={onUpdateNote}
          onDeleteNote={onDeleteNote} 
        />
      </div>
    </>
  );
}

export default App;
