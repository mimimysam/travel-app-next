import Link from "next/link";

export default function Menu() {
  return (
    <div>
      <h1>Menu</h1>
      <ul>
        <li>
          <Link href="/language">Language</Link>
        </li>
        <li>
          <Link href="/currency">Currency</Link>
        </li>
      </ul>
    </div>
  );
}
