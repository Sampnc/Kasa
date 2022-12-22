import "./index.css";

export default function Tag({ tag }) {
 // console.log(tags)
  return (
    <li className="tag">
      <p>{tag}</p>
    </li>
  );
}