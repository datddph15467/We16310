import Navigo from "navigo";
import Product from "./pages/product";
import HomePage from "./pages/home";
import AboutPage from "./pages/about";
import Contact from "./pages/contact";
import notFoundPage from "./pages/Notfound";
import newDetail from "./pages/newsDetail";
import tuyendung from "./pages/tuyendung";

const router = new Navigo("/", { linksSelector: "a" });

const print = (content) => {
    document.querySelector("#app").innerHTML = content;
}
router.on({
    "/": () => {
        print(HomePage.render());
    },
    "/about": () => {
        print(AboutPage.render());
    },
    "/product": () => {
        print(Product.render());
    },
    "/contact": () => {
        print(Contact.render());
    },
    "/tuyendung": () => {
        print(tuyendung.render());
    },
    "/news/:id": (value) => {
        print(newDetail.render(value.data.id));
    },
});
router.notFound(() => print(notFoundPage.render()));
router.resolve();