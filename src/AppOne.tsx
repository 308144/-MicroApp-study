import React from 'react'

export default function AppOne() {
  return (
    <div>
        <h1>AppOne</h1>
      {/*name(必传)：应用名称
         url(必传)：应用地址，会被自动补全为http://localhost:3000/index.html
         baseroute(可选)：基座应用分配给子应用的基础路由，就是上面的 `/my-page` */}
      <micro-app name='app1' url='http://localhost:3001/' baseroute='/app1' ></micro-app>
    </div>
  )
}
