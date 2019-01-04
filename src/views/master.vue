<template>
    <Layout>
        <Header class="header">
            <img src="../images/logo.png"
                 vspace="12"
                 hspace="15"
                 class="fl">
            <div class="inline-block line-v font14 pl10">
                <h3 class="pl10">个人博客系统</h3>
            </div>
            <div class="fr font14">
                <Icon type="ios-contact"
                      size="20"
                      class="mr5 grey-color"></Icon>
                <Dropdown trigger="click"
                          class="lh14 mr24"
                          placement="bottom-end"
                          @on-click="sys_click">
                    {{user.name}}
                    <Icon type="ios-arrow-down"
                          class="dark-color"></Icon>
                    <DropdownMenu slot="list">
                        <DropdownItem name="password">
                            修改密码
                        </DropdownItem>
                        <DropdownItem name="logout">
                            登出
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        </Header>
        <Layout class="layout_top">
            <Sider hide-trigger
                   class="menu">
                <Menu accordion
                      ref="side_menu"
                      theme="dark"
                      width="auto"
                      :active-name="$config.menu.active"
                      :open-names="$config.menu.opens">
                    <MenuItem v-for="item1 in menus"
                              v-show="!item1.menuBeans"
                              :key="item1.id+'01'"
                              :name="item1.code"
                              :to="item1.request">
                        <Icon :type="item1.iconcls"></Icon>
                        <strong>{{item1.manu_name}}</strong>
                    </MenuItem>
                    <Submenu v-for="item in menus"
                             v-show="item.menuBeans"
                             :key="item.id"
                             :name="item.code">
                        <template slot="title">
                            <Icon :type="item.iconcls"></Icon>
                            <strong>{{item.manu_name}}</strong>
                        </template>
                        <MenuItem v-for="sub in item.menuBeans"
                                  :name="sub.code"
                                  :key="sub.id"
                                  :to="sub.request">
                            {{sub.manu_name}}
                        </MenuItem>
                    </Submenu>
                </Menu>
                <br><br><br><br>
            </Sider>
            <Layout class="layout-content">
                <Row>
                    <Col span="20">
                        <Breadcrumb class="m12">
                            <BreadcrumbItem v-for="item in breadcrumbs"
                                            :key="item">
                                {{item}}
                            </BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                    <Col span="4">
                        <label class="fr m12">
                            {{date}}
                        </label>
                    </Col>
                </Row>
                <Content class="pd10 bg-white">
                    <router-view></router-view>
                </Content>
                <br>
                <Footer class="text-center"
                        style="padding-bottom: 0">
                    <span class="font12 grey-light-color">2018-2019 &copy; 我的博客 &nbsp;&nbsp;&nbsp;鄂ICP备18013597号</span>
                </Footer>
            </Layout>
        </Layout>
        <Modal v-model="delModal"
               :closable="false"
               :mask-closable="false"
               width="360">
            <div slot="header">
                <h2>
                    <Icon type="md-alert"
                          size="28"
                          class="cancel"></Icon>
                    确认
                </h2>
            </div>
            <div class="font14">
                确认删除？
            </div>
            <div slot="footer">
                <Button @click="delModal=false">
                    取消
                </Button>
                <Button type="error"
                        @click="confirm">
                    确认
                </Button>
            </div>
        </Modal>
    </Layout>
</template>

<script src="../components/master.js"></script>