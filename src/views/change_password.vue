<template>
    <div class="p48 bg-white">
        <Alert show-icon
               type="warning"
               v-if="user.needChangePwd">
            重要提示
            <template slot="desc">
                为了您的登录账户安全，请立即修改登录密码。
            </template>
        </Alert>
        <Row>
            <Col span="12">
                <Form ref="pwdForm"
                      :model="passwordInfo"
                      :rules="passwordRules"
                      :label-width="130"
                      @keyup.enter="submit('pwdForm')">
                    <FormItem prop="oldPassword">
                        <label class="grey-light-color"
                               slot="label">
                            旧密码
                        </label>
                        <Input v-model="passwordInfo.oldPassword"
                               placeholder="请输入旧密码"
                               :maxlength="20"
                               type="password"
                               clearable/>
                    </FormItem>
                    <FormItem prop="password">
                        <label class="grey-light-color"
                               slot="label">
                            新密码
                        </label>
                        <Input v-model="passwordInfo.password"
                               placeholder="请输入密码"
                               :maxlength="20"
                               type="password"
                               clearable/>
                    </FormItem>
                    <FormItem prop="passwordConfirm">
                        <label class="grey-light-color"
                               slot="label">
                            确认密码
                        </label>
                        <Input v-model="passwordInfo.passwordConfirm"
                               @on-blur="pwConfirm"
                               placeholder="请输入密码"
                               :maxlength="20"
                               type="password"
                               clearable/>
                    </FormItem>
                    <FormItem>
                        <Button :disabled="loading"
                                @click="reset">
                            重置
                        </Button>
                        &nbsp;&nbsp;
                        <Button type="primary"
                                :loading="loading"
                                @click="submit('pwdForm')">
                            提交
                        </Button>
                    </FormItem>
                </Form>
            </Col>
        </Row>
    </div>
</template>

<script src="../components/change_password.js"></script>