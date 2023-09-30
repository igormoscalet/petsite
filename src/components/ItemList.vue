<script setup>
import Item from './Item.vue'
</script>

<template>

<div class="contaner-fluid">
  <!-- filter not fully functioning
  <div class="row filter-limiter">
    <div class="col-lg-3 col-xs-6 filter">All filters</div>
    <div class="col-lg-3 col-xs-6 filter">Brands</div>
    <div class="col-lg-3 col-xs-6 filter">Animal Species</div>
    <div class="col-lg-3 col-xs-6 filter">Product class</div>
  </div>
  -->
  <div class="row item-row">
      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          Lorem Ipsum
        </template>
        <template #price>
          00
        </template>
        <template #description>
          Lorem Ipsum is simply dummy text for printing
        </template>
      </Item>
    
      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          Some Other Item
        </template>
        <template #price>
          25
        </template>
        <template #description>
          Some Other Item Description
        </template>
      </Item>
    
      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          3rd Item
        </template>
        <template #price>
          5
        </template>
        <template #description>
          3rd Item Description
        </template>
      </Item>
    
      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          4th Item
        </template>
        <template #price>
          88
        </template>
        <template #description>
          4th Item Description
        </template>
      </Item>

      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          Lorem Ipsum
        </template>
        <template #price>
          00
        </template>
        <template #description>
          Lorem Ipsum is simply dummy text for printing
        </template>
      </Item>
    
      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          Some Other Item
        </template>
        <template #price>
          25
        </template>
        <template #description>
          Some Other Item Description
        </template>
      </Item>
    
      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          3rd Item
        </template>
        <template #price>
          5
        </template>
        <template #description>
          3rd Item Description
        </template>
      </Item>
    
      <Item>
        <template #photo>
          <img src="../assets/itemimg.png" alt="">
        </template>
        <template #title>
          4th Item
        </template>
        <template #price>
          88
        </template>
        <template #description>
          4th Item Description
        </template>
      </Item>
        </div>
</div>

</template>
