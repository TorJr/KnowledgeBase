---
title: App-Verwaltung
sidebar_position: 2
---

:::info

Dieser Artikel behandelt AdGuard für Android, einem multifunktionalen Werbeblocker, der Ihr Gerät auf Systemebene schützt. Um zu sehen, wie es funktioniert, [laden Sie die AdGuard-App herunter](https://agrd.io/download-kb-adblock)

:::

The _App management_ module can be accessed by tapping the _App management_ tab (third icon from the left at the bottom of the screen). This section allows you to manage permissions and filtering settings for all apps installed on your device.

![App management \*mobile\_border](https://cdn.adtidy.org/blog/new/9sakapp_management.png)

By tapping an app, you can manage its settings:

- Route its traffic through AdGuard
- Block ads and trackers in this app (_Filter app content_)
- Filter its HTTPS traffic (for non-browser apps, it requires [installing AdGuard's CA certificate into the system store](/adguard-for-android/solving-problems/https-certificate-for-rooted/), available on rooted devices)
- Route it through your specified proxy server or AdGuard VPN in the Integration mode

![App-Verwaltung in Chrome \*mobile\_border](https://cdn.adtidy.org/blog/new/nvvgochrome_management.png)

From the context menu, you can also access the app's stats.

![App-Verwaltung in Chrome. Kontextmenü \*mobile\_border](https://cdn.adtidy.org/blog/new/4z85achome_management_context_menu.png)

### “Problem-free” and “problematic” apps

Die meisten Apps funktionieren ordnungsgemäß, wenn die Filterung aktiviert ist. Bei solchen Apps wird der Datenverkehr durch AdGuard geleitet und standardmäßig gefiltert.

Some apps, such as Download Manager, radio, system apps with UID 1000 and 1001 (for example, Google Play services), are “problematic” and may work incorrectly when routed through AdGuard. That's why you may see the following warning when trying to route or filter all apps:

![Route all apps dialog \*mobile\_border](https://cdn.adtidy.org/blog/new/6du8jiroute_all.png)

To ensure proper operation of all apps installed on your device, we strongly recommend that you route only problem-free apps through AdGuard. You can see the full list of apps not recommended for filtering in _Settings_ → _General_ → _Advanced_ → _Low-level settings_ → _Protection_ → _Excluded apps_.
