const dashboard = {
    render() {
        return /*html*/ `
        <header>
            <div class="bg-blue-900 py-4">
                <a href="">
                    <img src="https://phothongcaodang.fpt.edu.vn/wp-content/uploads/LOGO-PTC%C4%90-White-Transparency.png" alt="" class="mx-auto w-32">
                </a>
            </div>
            <nav class="bg-amber-600 flex ">
                <ul class="w-8/12 flex justify-center">
                    <li><a href="/" class="text-white block text-xs px-4 py-3 hover:bg-indigo-500">Trang Chủ</a></li>
                    <li><a href="/about" class="text-white text-xs  block px-4 py-3 hover:bg-indigo-500">Tuyển sinh</a></li>
                    <li><a href="/product" class="text-white text-xs  block px-4 py-3 hover:bg-indigo-500">Chương trình đào tạo</a></li>
                    <li><a href="/contact" class="text-white text-xs  block px-4 py-3 hover:bg-indigo-500">Góc sinh viên</a></li>
                    <li><a href="/tuyendung" class="text-white text-xs  block px-4 py-3 hover:bg-indigo-500">Tuyển dụng</a></li>
                </ul>
                <div class="m-auto ">
                    <input type="text">
                    <button class="bg-blue-900 text-sm text-white border border-white w-28 h-6">Tìm kiếm</button>
                </div>
            </nav>
        </header>
        `
    }
}
export default dashboard;