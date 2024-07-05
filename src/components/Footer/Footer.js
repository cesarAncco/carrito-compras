/* eslint-disable jsx-a11y/anchor-is-valid */
const Footer = () => {
  return (
    <footer class="bg-dark text-white pt-4">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <h5>Somos</h5>
            <p>
              Somos una tienda donde ofrecemos Laptops de diferentes marcas.
            </p>
          </div>
          <div class="col-md-4">
            <h5>Navegación</h5>
            <ul class="list-unstyled">
              <li>
                <a class="text-white">Catalogo</a>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h5>Contactanos</h5>
            <ul class="list-unstyled">
              <li>
                <p class="text-white">mundoLaptop@gmail.com</p>
              </li>
              <li>
                <p class="text-white">+51 987654321</p>
              </li>
              <li>
                <p class="text-white">Arequipa</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="row mt-4">
          <div class="col-md-12 text-center">
            <p class="mb-0">
              &copy; 2024 Mundo Laptop. Todos los Derechos Reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
