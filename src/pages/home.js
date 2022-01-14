import Banner from "../components/banner";
import NewsList from "../components/newList";
import NewsList2 from "../components/newList2";
import fotter from "../components/fotter";
import dashboard from "../components/dashbroad";
const HomePage = {
    render() {
        return /* html */ `
        <div class="max-w-5xl mx-auto border">
        <div class="dashbroad" >
            ${dashboard.render()}
        </div>
        <div class="banner" >
            ${Banner.render()}
        </div>
        <div class="news" >
            ${NewsList.render()}
        </div>
        <div class="news2" >
            ${NewsList2.render()}
        </div>
        <div class="fotter" >
            ${fotter.render()}
        </div>

        </div>
        `;
    }
}

export default HomePage;