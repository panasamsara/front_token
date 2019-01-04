<template>
    <div>
        <Row>
            <Col span="18">
            <Form inline
                  @keydown.native.enter.prevent="changePage(1)">
                <FormItem>
                    <Input search
                           style="width: 300px"
                           v-model="searchModel.keyword"
                           placeholder="关键字"/>
                </FormItem>
                <FormItem>
                    <Button @click="changePage(1)"
                            icon="ios-search">
                        搜索
                    </Button>
                </FormItem>
            </Form>
            </Col>
            <Col span="6"
                 class="text-right">
            <Button type="primary"
                    icon="md-add"
                    @click="showRole(false)">
                新建角色
            </Button>
            </Col>
        </Row>
        <Table :loading="loading"
               :columns="columns"
               :data="items"></Table>
        <br>
        <Page :total="total"
              :page-size="searchModel.pageSize"
              :current="searchModel.pageNum"
              show-elevator
              show-total
              @on-change="changePage"
              class="fr"/>
        <div class="clear"></div>
        <Modal v-model="sysMenuModal">
            <div slot="header">
                <h3>
                    菜单
                </h3>
            </div>
            <div>
                <Tree :data="sysMenuList"
                      ref="sysMenuTree"
                      :render="renderContent"></Tree>
            </div>
            <div slot="footer"
                 class="text-right">
                <Button @click="sysMenuModal=false">
                    取消
                </Button>
                <Button type="primary"
                        :loading="loading"
                        @click="confirm">
                   确认
                </Button>
            </div>
        </Modal>
        <Modal v-model="sysRoleModal">
            <div slot="header">
                <h3>
                    角色
                </h3>
            </div>
            <div>
                <Form ref="roleForm"
                      :model="roleInfo"
                      :rules="roleRules"
                      :label-width="70"
                      @keyup.enter="submit('roleForm')">
                    <FormItem prop="role_name">
                        <label class="grey-light-color"
                               slot="label">
                            名称
                        </label>
                        <Input v-model="roleInfo.role_name"
                               placeholder="名称"
                               :maxlength="20"
                               type="text"
                               clearable/>
                    </FormItem>
                    <FormItem prop="role_level">
                        <label class="grey-light-color"
                               slot="label">
                            等级
                        </label>
                        <Input v-model="roleInfo.role_level"
                               placeholder="等级"
                               :maxlength="20"
                               type="text"
                               clearable/>
                    </FormItem>
                </Form>
            </div>
            <div slot="footer"
                 class="text-right">
                <Button @click="sysRoleModal=false">
                    取消
                </Button>
                <Button type="primary"
                        :loading="loading"
                        @click="submit('roleForm')">
                    保存
                </Button>
            </div>
        </Modal>
    </div>
</template>
<script src="../components/role.js"></script>