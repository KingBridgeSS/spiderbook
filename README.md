spiderbook的宗旨是资源共享，大体想法是让用户把爬虫爬到的资源，用自动化的方式通过api post到后端（当然也可以手动）。

api自己抓包吧，现在只是写来玩玩

目前只写了简单的增删查改功能，而且post的数据只能是html。。

关于安全性，由于资源的多样，不能在后端设waf，所以肯定会导致xss和csrf。测试了一下scipt不能加载(vue的保护机制？)，但是img onerror是有用的

饼如下：

[![bgq6Vx.png](https://s1.ax1x.com/2022/03/08/bgq6Vx.png)](https://imgtu.com/i/bgq6Vx)

前端vue element ui 

后端nodejs express

数据库mysql

创造mysql数据库代码如下
```
mysql -u root -p2022
CREATE DATABASE mydb;
use mydb;
create table if not exists `books`(
	bookid int(11) not null primary key auto_increment,
	userid int(11) ,
	content text,
	title varchar(255),
	uploader varchar(255),
	image_src varchar(255)
)ENGINE=InnoDB DEFAULT CHARSET=utf8;
ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY '2022';
grant all privileges on *.* to 'root'@'%' ;
FLUSH PRIVILEGES;
```

如果你无聊至极，对我这个菜鸡的开发经历感兴趣的话，

[记第一次web开发历程](https://www.cnblogs.com/kingbridge/articles/15982276.html)
