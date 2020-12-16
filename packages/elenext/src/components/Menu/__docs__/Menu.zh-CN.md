## Nav 布局容器

用于菜单的容器组件，方便快速搭建页面的基本结构：

### 常见页面布局

```vue demo
<template>
  <Row :gutter="[40, 0]">
    <Col flex="250px">
      <Menu unique-opened mode="vertical">
        <MenuItem><i class="el-icon-location" />导航一</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-document" />导航三</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-setting" />导航四</MenuItem>
      </Menu>
    </Col>
    <Col flex="250px">
      <Menu
        unique-opened
        mode="vertical"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        active-background-color="#434a50"
      >
        <MenuItem><i class="el-icon-location" />导航一</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-document" />导航三</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-setting" />导航四</MenuItem>
      </Menu>
    </Col>
  </Row>
</template>
```

```vue demo
<template>
  <Row :gutter="[40, 0]">
    <Col flex="250px">
      <Menu
        unique-opened
        mode="popper"
        text-color="#fff"
        active-text-color="#ffd04b"
        background-color="#545c64"
        active-background-color="#434a50"
      >
        <MenuItem><i class="el-icon-location" />导航一</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三导航三导航三导航三导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-document" />导航三</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-setting" />导航四</MenuItem>
      </Menu>
    </Col>
    <Col flex="250px">
      <Menu unique-opened mode="popper">
        <MenuItem><i class="el-icon-location" />导航一</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三导航三导航三导航三导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-document" />导航三</MenuItem>
        <SubMenu>
          <template #title>
            <i class="el-icon-location" />
            <span>导航二</span>
          </template>
          <MenuItemGroup title="分组一">
            <MenuItem>导航三</MenuItem>
            <MenuItem>导航三</MenuItem>
          </MenuItemGroup>
          <MenuItemGroup title="分组二">
            <MenuItem>导航三</MenuItem>
            <SubMenu>
              <template #title>
                <span>导航二</span>
              </template>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
              <MenuItem><i class="el-icon-document" />导航三</MenuItem>
            </SubMenu>
          </MenuItemGroup>
        </SubMenu>
        <MenuItem><i class="el-icon-setting" />导航四</MenuItem>
      </Menu>
    </Col>
  </Row>
</template>
```