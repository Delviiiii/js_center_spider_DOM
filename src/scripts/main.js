'use strict';

const wall = document.querySelector('div.wall');
const spider = wall.querySelector('img.spider');

const wallWidth = wall.clientWidth;
const wallHeight = wall.clientHeight;

const spiderWidth = spider.clientWidth;
const spiderHeight = spider.clientHeight;

const topPos = (wallWidth - spiderWidth) / 2;
const leftPos = (wallHeight - spiderHeight) / 2;

spider.style.top = topPos + 'px';
spider.style.left = leftPos + 'px';
