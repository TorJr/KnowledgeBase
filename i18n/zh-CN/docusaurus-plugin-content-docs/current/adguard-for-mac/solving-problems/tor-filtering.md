---
title: 在 Tor 浏览器设置过滤
sidebar_position: 10
---

:::info

This article is about AdGuard for Mac, a multifunctional ad blocker that protects your device at the system level. To see how it works, [download the AdGuard app](https://agrd.io/download-kb-adblock)

:::

Tor 浏览器默认添加到「过滤应用程序」的 AdGuard 列表内。 不过，为了进行过滤，AdGuard 需要更改 Tor 浏览器的安全设置。 这样，Tor 将信任 AdGuard CA 证书。

如您想要在 Tor 浏览器进行过滤，并在「*首选项*」→「*网络*」→「*应用程序*」开启 AdGuard 过滤，那么 AdGuard 将为您显示以下内容的窗口 ：

![AdGuard 对话框](https://cdn.adtidy.org/content/kb/ad_blocker/mac/tor-setup.png)

为了更新 Tor 浏览器设置，AdGuard 将设置：

`security.enterprise_roots.enabled`: true

此设置将允许 Tor 信任根证书。 [了解更多](https://support.mozilla.org/en-US/kb/setting-certificate-authorities-firefox)

`security.cert_pinning.enforcement_level`: 1

Public Key Pinning（公钥固定）是一种安全措施，允许网站确保网站和用户之间的连接是真实的。 这涉及到网站发布一个它所信任的公钥列表。 在执行级别设置（enforcement level）为「1」的情况下，锁定（pinning）对自定义 CA 证书来说是不执行的。 [了解更多](https://wiki.mozilla.org/SecurityEngineering/Public_Key_Pinning)

为了应用更改，请重新开启 Tor 浏览器。

If you manually change these settings, Tor filtering will be stopped.
