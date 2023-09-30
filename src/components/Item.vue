<script>
import 'primeicons/primeicons.css'
</script>
<template>
<div class="col-xl-3 col-lg-4 col-md-6 col-xs-12">
<div class="item">
  <div class="row">
    <div class="photo">
        <slot name="photo">
        </slot>
        <div class="fav">
          <i class="pi pi-info-circle fav-info"></i><br>
          <i class="pi pi-heart fav-heart"></i>
        </div>
    </div>
  </div>
  <div class="row item-line-1">
    <div class="col-9 item-title">
      <slot name="title"></slot>
    </div>
    <div class="col-3 item-price">
      $ <slot name="price"></slot>
    </div>
  </div>
  <div class="row item-line-2">
    <div class="item-description">
      <slot name="description"></slot>
    </div>
  </div>
</div>
</div>
</template>

<style scoped>
  .fav{
    background: #D9D9D9;
    border-radius: 0px 9.82px;
    position: absolute;
    right: 0;
    top: 0;
  }
  .photo{
    background: #9C9C9C;
    border-radius: 9.82px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .item{
    margin: 40px 10%;
  }
  .item-title{
    font-weight: 700;
    font-size: 26px;
    padding: 0;
  }
  .item-description{
    font-weight: 300;
    font-size: 26px;
    padding: 0;
  }
  .item-price{
    text-align: right;
    font-weight: 700;
    font-size: 26px;
    color: #CD5B25;
    padding: 0;
  }
  .item-line-1{
    margin-top: 30px;
  }
  .item-line-2{
    margin-top: 15px;
  }
</style>
