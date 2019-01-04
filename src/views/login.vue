<template>
    <div class="container login_bg"
         @keyup.enter="submit('loginForm')">
        <div class="child login bg-white">
            <div class="text-center">
                <img src="../images/logo.png"
                     vspace="16">
            </div>
            <br>
            <Form ref="loginForm"
                  :model="requestData"
                  :label-width="20"
                  :rules="rule">
                <FormItem>
                    <Icon type="ios-person"
                          slot="label"
                          size="16"/>
                    <Input type="text"
                           clearable
                           v-model="requestData.name"
                           :maxlength="20"
                           placeholder="邮箱"></Input>
                </FormItem>
                <FormItem>
                    <Icon type="ios-lock"
                          slot="label"
                          size="16"/>
                    <Input type="password"
                           clearable
                           v-model="requestData.password"
                           :maxlength="20"
                           placeholder="密码"></Input>
                </FormItem>
                <FormItem prop="login">
                    <Button :loading="loading"
                            type="primary"
                            long
                            @click="submit('loginForm')">
                        登录
                    </Button>
                </FormItem>
                <FormItem>
                    <Checkbox v-model="requestData.remember">
                        记住密码
                    </Checkbox>
                </FormItem>
            </Form>
        </div>
        <div class="footer text-center white-color">
            2018-2019 &copy; 我的博客 &nbsp;&nbsp;&nbsp;鄂ICP备18013597号
        </div>
    </div>
</template>
<script src="../components/login.js"></script>
