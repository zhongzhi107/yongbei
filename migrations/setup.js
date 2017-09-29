/* eslint-disable */
export const up = knex => knex.schema
  .createTable('catalogs', (table) => {
    table.comment('商品分类表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('name', 50).notNullable().defaultTo('').comment('分类名称');
    table.string('parentId', 36).notNullable().defaultTo('0').comment('父分类编号');
    table.integer('orderIndex').unsigned().notNullable().defaultTo(0).comment('显示排序编号');
    table.string('icon', 200).notNullable().defaultTo('').comment('分类图标地址');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('comments', (table) => {
    table.comment('商品评论表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('productId', 36).notNullable().defaultTo('').comment('商品编号');
    table.string('userId', 36).notNullable().defaultTo('').comment('用户编号');
    table.string('content', 500).notNullable().defaultTo('').comment('评论内容');
    table.integer('starCount').unsigned().notNullable().defaultTo(0).comment('评价星数');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('contacts', (table) => {
    table.comment('订单联系表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('name', 50).notNullable().defaultTo('').comment('收货人');
    table.string('phone', 20).notNullable().defaultTo('').comment('联系电话');
    table.string('address', 500).notNullable().defaultTo('').comment('联系地址');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('expresses', (table) => {
    table.comment('商品快递表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('orderId', 36).notNullable().defaultTo('').comment('订单编号');
    table.string('deliveryPerson', 20).notNullable().defaultTo('').comment('发货人');
    table.string('expressNumber', 30).notNullable().defaultTo('').comment('快递单号');
    table.string('company', 50).notNullable().defaultTo('').comment('快递公司');
    table.float('cost').notNullable().defaultTo(0).comment('快递费用');
    table.enu('status', [1, 2, 3, 4]).notNullable().defaultTo(1).comment('快递状态');
    table.timestamp('deliveryAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('发货时间');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('products', (table) => {
    table.comment('商品详情表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('catalogId', 36).notNullable().defaultTo('').comment('分类编号');
    table.integer('ageGroupId').notNullable().defaultTo(0).comment('年龄段编号');
    table.integer('countryId').notNullable().defaultTo(0).comment('商品产地编号');
    table.string('name', 200).notNullable().defaultTo('').comment('商品名称');
    table.string('model', 100).notNullable().defaultTo('').comment('商品型号');
    table.string('size', 100).notNullable().defaultTo('').comment('商品尺寸');
    table.float('salePrice').notNullable().defaultTo(0).comment('市场价格');
    table.float('deposit').notNullable().defaultTo(0).comment('押金');
    table.float('rent').notNullable().defaultTo(0).comment('每日租金');
    table.integer('stockCount').unsigned().notNullable().defaultTo(0).comment('库存数量');
    table.text('content').notNullable().comment('详细介绍');
    table.integer('orderIndex').unsigned().notNullable().defaultTo(0).comment('显示排序编号');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
    table.timestamp('deletedAt').nullable().comment('删除时间');
  })
  .createTable('orders', (table) => {
    table.comment('订单表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('userId', 36).notNullable().defaultTo('0').comment('用户编号');
    table.string('contactId', 36).notNullable().defaultTo('').comment('收货人编号');
    table.json('items').notNullable().comment('序列化的商品Id、名称、价格、数量');
    table.float('amount').notNullable().defaultTo(0).comment('订单总价');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('pictures', (table) => {
    table.comment('商品图片表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('productId', 36).notNullable().defaultTo('0').comment('商品编号');
    table.string('url', 200).notNullable().defaultTo('').comment('图片地址');
    table.integer('orderIndex').unsigned().notNullable().defaultTo(0).comment('显示排序编号');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('users', (table) => {
    table.comment('用户表');
    table.string('id', 36).primary().notNullable().defaultTo('').comment('自动编号');
    table.string('username', 50).notNullable().defaultTo('').comment('用户姓名');
    table.string('phone', 20).notNullable().defaultTo('').comment('手机号码');
    table.string('avatar', 200).notNullable().defaultTo('').comment('头像图片地址');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('ageGroups', (table) => {
    table.comment('商品年龄段配置表');
    table.increments('id');
    table.string('name', 20).notNullable().defaultTo('').comment('年龄段名称');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })
  .createTable('countries', (table) => {
    table.comment('商品产地配置表');
    table.increments('id');
    table.string('name', 20).notNullable().defaultTo('').comment('产地名称');
    table.timestamp('createdAt').defaultTo(knex.fn.now()).comment('新增时间');
    table.timestamp('updatedAt').notNullable().defaultTo('1971-01-01 00:00:00').comment('修改时间');
  })

;

export const down = knex => knex.schema
  .dropTableIfExists('catalogs')
  .dropTableIfExists('comments')
  .dropTableIfExists('contacts')
  .dropTableIfExists('expresses')
  .dropTableIfExists('products')
  .dropTableIfExists('orders')
  .dropTableIfExists('pictures')
  .dropTableIfExists('users')
  .dropTableIfExists('ageGroups')
  .dropTableIfExists('countries')
;
