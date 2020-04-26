<template>
  <div class="hello" >
      <!-- <el-row>
        <el-input suffix-icon="el-icon-search" placeholder="搜索"
        v-model="book.bookName" @input="getBookInfo(pageNum, pageSize, book)" > </el-input>
      </el-row> -->
      
    <yd-list theme="2"> 
        <yd-list-item v-for="(book,index) in bookList" :key="index">
            <img slot="img" @click="goToBookDetail(book.bookId)" :src='book.img.substring(0, 7) == "http://" ? book.img : Sever_URL + "/download/"+book.img'>
            <span slot="title"> {{ book.bookName.trim().length > 12 ? book.bookName.substring(0,12) + '......' : book.bookName}}  </span>
            <yd-list-other slot="other">
                <div>
                    <span >{{book.author.trim().length > 5 ? book.author.substring(0,5) + '......' : book.author}}</span>
                </div>
                <div>
                    <p v-if="book.ebook == 0" style="font-size: 10px;color: #AEA7A7;margin-bottom: 0px;float:right">借阅: {{book.borrowingNumber}}</p>
                    <p v-if="book.ebook == 1" style="font-size: 10px;color: #AEA7A7;margin-bottom: 0px;float:right">{{book.categoryId}}</p>
                </div>
            </yd-list-other>
        </yd-list-item>
    </yd-list>

    <div style="margin-top:3%">
    <a @click="loadMore" v-if="bookList.length < total" >加载更多</a>
            <p v-if="bookList.length == total">我也是有底线的</p>
        
      </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
  name: 'Hello',
  props: ['bookCondition'],
  data () {
    return {
      Sever_URL: axios.defaults.baseURL,
      bookList: [],
      pageNum: 1,
      pageSize: 10,
      total: 0,
      book: {
        ebook: 0,
        bookStatus: '0',
        bookName: null
      },
      url: ''
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.scrollBottom)
  },
  created () {
    if (this.bookCondition != null && this.bookCondition != 'undenfied') {
      this.book = this.bookCondition
    }
    this.getBookInfo(this.pageNum, this.pageSize, this.book)
  },
  // destroyed () {
  //   window.removeEventListener('scroll', this.scrollBottom)
  // },
  methods: {
    loadMore(){
      this.pageNum = this.pageNum + 1
      this.getBookInfo(this.pageNum, this.pageSize, this.book)
    },
    scrollBottom () {
      var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      var windowHeight = document.documentElement.clientHeight || document.body.clientHeight
      var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
      if (scrollTop + windowHeight >= (scrollHeight - 10)) {
        this.pageNum = this.pageNum + 1
        this.getBookInfo(this.pageNum, this.pageSize, this.book)
      }
    },
    goToBookDetail (bookId) {
      document.body.style.overflow = null
      this.$router.push({path: '/front/bookDetail/' + bookId})
    },
    handleCurrentChange (val) {
      this.getBookInfo(val, this.pageSize, this.book)
    },
    getBookInfo (pageNum, pageSize, book) {
      axios.post(
        '/book/all?pageNum=' + pageNum + '&pageSize=' + pageSize, book
      ).then(res => {
        if (res.data.code === 200) {
          if (res.data.data.list == null || res.data.data.list.length == 0) {
            this.$message('暂无数据')
          }
          this.bookList = this.bookList.concat(res.data.data.list)
          // this.bookList = res.data.data.list
          this.bookList.map(book => {
            book.inputTime = moment(book.inputTime).format('YYYY-MM-DD')
            return book
          })
          this.pageNum = res.data.data.pageNum
          this.total = res.data.data.total
        } else {
          this.$message.error(res.data.message)
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
