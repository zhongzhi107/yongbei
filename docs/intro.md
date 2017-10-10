# 名词解释

## Connection
使用 graphql 对服务器进行一次数据查询就是一次 connection。

点被线连接，nodes 是点， edges 是线。

## Edge
Edges 连接 connections 和 nodes。

每个 edges 字段包含一个 node 字段和一个 cursor 字段。 Cursor 字段用来分页。

## Node
Node 就是一个对象，你能直接访问对象，也能使用 connection 访问该对象的相关对象。

如果一个对象返回的不是明文类型（Int, Float, String, Boolean, or ID），你必须指定它的子字段，直到返回明文的字段。

##
