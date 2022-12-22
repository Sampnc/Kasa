import "../styles/tag.css";

export default function Tag({ tag }) {
 // console.log(tags)
  return (
    <div className="tag">
      <p>{tag}</p>
    </div>
  );
}