import React from "react";
import { FiTrash2 } from "react-icons/fi";

export default function GeneratorItem(props) {
  const { generator, showDelete } = props;
  return (
    <a
      href={`${process.env.NEXT_PUBLIC_EDITOR_BASE_URL}/${generator._id}`}
      className="generator-card"
    >
      {showDelete && (
        <div
          className="generator-card__delete"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            props.onDelete(generator._id);
          }}
        >
          <FiTrash2 />
        </div>
      )}
      <div className="generator-card__image">
        <img src={generator.preview} alt={generator.title} />
      </div>
      <div className="generator-card__title">{generator.title}</div>
    </a>
  );
}
