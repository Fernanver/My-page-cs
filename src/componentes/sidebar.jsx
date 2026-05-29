import './sidebar.css'

function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Mi web</h2>

      <nav>
        <a href="#">inicio</a>
        <a href="#">post</a>
        <a href="#">galeria</a>
        <a href="#">about</a>
      </nav>
    </aside>
  );
}

export default Sidebar;