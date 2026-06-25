
type NavbarProps = {
  onPerfil?: () => void;
  onCarrito?: () => void;
  onCatalogo?: () => void;
  onContactos?: () => void;
};

function Navbar({
  onPerfil,
  onCarrito,
  onCatalogo,
  onContactos,
}: NavbarProps) {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">Mi Tienda</h2>

      <div className="navbar-menu">
        <button onClick={onCatalogo}>Catálogo</button>
        <button onClick={onCarrito}>Carrito</button>
        <button onClick={onPerfil}>Perfil</button>
        <button onClick={onContactos}>Contactos</button>
      </div>
    </nav>
  );
}

export default Navbar;