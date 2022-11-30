## 六、vue面试题

#### 6.1 . MVC、MVP与MVVM模式

**MVC：**

MVC是应用最广泛的软件架构之一，一般`MVC`分为：

Controller/kan  tur ler/

`Model（ 模型 ）`、`Controller（ 控制器 ）`、`View（ 视图 ）`。

这主要是基于分层的目的，让彼此的职责分开。`View` 一般通过 `Controller` 来和 `Model` 进行联系。`Controller`是 `Model` 和 `View` 的协调者，`View`和`Model`不直接联系。基本联系都是单向的。


> 1、View 传送指令到 Controller
> 2、Controller 完成业务逻辑后，要求 Model 改变状态
> 3、Model 将新的数据发送到 View，用户得到反馈

**MVP：**

MVP 模式将 Controller 改名为 `Presenter`，同时改变了通信方向。

> 1、各部分之间的通信，都是双向的。
> 2、View 与 Model 不发生联系，都通过 Presenter 传递。
> 3、View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

**MVVM**

`MVVM` 是把 `MVC` 的 `Controller` 和 `MVP` 的 `Presenter` 改成了 `ViewModel`。

`View` 的变化会自动更新到 `ViewModel`，`ViewModel` 的变化也会自动同步到 `View`上显示。这种自动同步是因为 `ViewModel` 中的属性实现了 `Observer`，当属性变更时都能触发对应的操作。

#### 6.2 MVVM模式的优点以及与MVC模式的区别

**MVVM模式的优点：**

`1、低耦合：`视图（View）可以独立于 Model 变化和修改，一个 ViewModel 可以绑定到不同的"View"上，当View变化的时候Model可以不变，当Model变化的时候View也可以不变。

`2、可重用性：`你可以把一些视图逻辑放在一个ViewModel里面，让很多 view 重用这段视图逻辑。

`3、独立开发：`开发人员可以专注于业务逻辑和数据的开发（ViewModel），设计人员可以专注于页面设计。

`4、可测试：`界面素来是比较难于测试的，而现在测试可以针对ViewModel来写。

**MVVM 和 MVC 的区别：**

`mvc` 和 `mvvm` 其实区别并不大。都是一种设计思想。

**主要区别**

- mvc 中 Controller演变成 mvvm 中的 viewModel，

- mvvm 通过数据来显示视图层而不是节点操作。
- mvvm主要解决了: mvc中大量的DOM 操作使页面渲染性能降低，加载速度变慢，影响用户体验。