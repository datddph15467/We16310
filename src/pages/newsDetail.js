import data from "../data";
const newDetail = {
    render(id) {
        const result = data.find((post) => post.id === id)
        return /*html*/ `
            <h1>${result.title}</h1>
            <img src="${result.img}" value="${result.title}">
            <p>${result.desc}</p>
        `;
    }
}
export default newDetail;