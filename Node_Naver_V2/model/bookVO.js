var mongoose = require('mongoose')
var bookVO = mongoose.Schema({


    searchVal : {
        type : String,
        primaryKey : true
    },

   

    title: String,	//string	검색 결과 문서의 제목을 나타낸다. 제목에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
    link: String,	//string	검색 결과 문서의 하이퍼텍스트 link를 나타낸다.
    image: String,	//string	썸네일 이미지의 URL이다. 이미지가 있는 경우만 나타납난다.
    author: String,//	string	저자 정보이다.
    price: String,	//integer	정가 정보이다. 절판도서 등으로 가격이 없으면 나타나지 않는다.
    discount: String,	//integer	할인 가격 정보이다. 절판도서 등으로 가격이 없으면 나타나지 않는다.
    publisher: String,	//string	출판사 정보이다.
    isbn: String,	//integer	ISBN 넘버이다.
    description: String,	//string	검색 결과 문서의 내용을 요약한 패시지 정보이다. 문서 전체의 내용은 link를 따라가면 읽을 수 있다. 패시지에서 검색어와 일치하는 부분은 태그로 감싸져 있다.
    pubdate: String	//



    })


module.exports = mongoose.model("tbl_book2", bookVO)