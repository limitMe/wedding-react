# Desmond婚礼前端

**Frontend for Desmond's Wedding**

后端项目地址：https://github.com/limitMe/wedding-node

Paired with: https://github.com/limitMe/wedding-node

 

## 如何运行 How to run

由于我的网页服务器没有足够大的内存进行`npm build`，所以我在git repo中包含了build文件夹，所以你只需要在安装serve之后跑`serve -s build -l 80`

`/game`路径下的网页需要请求后端，在后端项目跑起来后，修改`config.json`的配置。

Since my server hosting this website doesnot have enough RAM to run `npm build` of this project. So I add `build` folder to this git repo. You can directly run `serve -s build -l 80` after you installed serve globally.

Pages under `/game` route requires backend. Modify `config.json` after running backend repo.