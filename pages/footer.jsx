export default function Footer() {
  return (
    <footer style={{ boxShadow: "0px 0px 100px white" }}>
      <div className="info ">
        <a
          style={{ textAlign: "center" }}
          href="https://github.com/Ericlkm"
          target="_blank"
          title="My Github!"
        >
          <i
            class="fa fa-github"
            style={{ color: "white", fontSize: "40px" }}
          ></i>
        </a>
        <a href="mailto: gtprinceeric.el1@gmail.com" title="Email me">
          <i
            class="fa-solid fa-envelope"
            style={{ fontSize: "45px", color: "white" }}
          ></i>
        </a>
        <div className="text-center text-white p-3">
          <p className="text-white">
            {" "}
            {new Date().getFullYear()} Copyright: Eric Lkm
          </p>
        </div>
      </div>
    </footer>
  );
}
