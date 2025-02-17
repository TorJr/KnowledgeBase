---
title: Как автоматизировать AdGuard для Android
sidebar_position: 3
---

:::info

This article is about AdGuard for Android, a multifunctional ad blocker that protects your device at the system level. Чтобы увидеть, как он работает, [скачайте приложение AdGuard](https://agrd.io/download-kb-adblock)

:::

Многие пользователи выбирают Android из-за возможностей настроить устройство под себя. Поведение устройства по умолчанию может устраивать не всех. Допустим, вы хотите, чтобы защита отключалась при запуске определённого приложения и снова включалась при его остановке. Это работа для приложения Tasker.

## Интерфейс AdGuard

Существует множество приложений-таскеров‎, например, [Tasker](https://play.google.com/store/apps/details?id=net.dinglisch.android.taskerm&noprocess), [AutomateIt](https://play.google.com/store/apps/details?id=AutomateIt.mainPackage&noprocess) и другие. AdGuard предоставляет интерфейс, который позволяет этим приложениям настраивать различные правила автоматизации.

![Автоматизация *mobile_border](https://cdn.adtidy.org/blog/new/mmwmfautomation.jpg)

Thanks to this interface, any app can send a special message (called “intent”) that contains the name of the action and some additional data, if needed. AdGuard увидит этот интент и выполнит запрашиваемое действие.

### Вопросы безопасности

Не опасно ли позволять каким-то случайным приложениям управлять работой AdGuard? Опасно, именно поэтому вместе с интентом отправляется пароль. Этот пароль генерируется автоматически, но вы можете поменять его самостоятельно в расширенных настройках AdGuard.

### Доступные действия

будучи включёнными в интент, будут понятны AdGuard:

`start` запускает защиту, дополнительные данные не нужны;

`stop` останавливает защиту, никаких дополнительных данных не требуется;

`pause` приостанавливает защиту. Разница между `pause` и `stop` в том, что при нажатии на первый появляется уведомление, перезапускающее защиту. Дополнительные параметры не нужны;

`update` проверяет наличие доступных обновлений фильтров и приложения, дополнительные данные не нужны;

-----

`dns_filtering` включает и выключает DNS-фильтрацию. В поле Extra нужно добавить информацию:

`enable:true` или `enable:false` соответственно включает или выключает DNS-фильтрацию.

-----

`dns_server` переключается между DNS-серверами, необходимо указать дополнительные данные:

 `server:adguard dns` переключается на сервер AdGuard DNS;

:::note

Полный список поддерживаемых провайдеров можно найти в нашем списке [известных DNS-провайдеров](https://adguard-dns.io/kb/general/dns-providers/).

:::

 `server:custom` переключается на ранее добавленный сервер с именем `custom`;

 `server:tls://dns.adguard.com` создаёт новый сервер и переключается на него, если среди ранее добавленных серверов и провайдеров нет сервера с таким же адресом. В противном случае он переключается на соответствующий сервер. Адреса серверов можно добавлять в виде IP (обычный DNS), `sdns://…` (DNSCrypt или DNS-over-HTTPS), `https://…` (DNS-over-HTTPS) или `tls://...` (DNS-over-TLS);

 `server:1.1.1.1, tls://1.1.1.1` создаёт сервер с адресами через запятую и переключается на него. При добавлении сервера через `server:1.1.1.1, tls://1.1.1.1` ранее добавленный сервер удаляется.

 `server:system` сбрасывает настройки DNS на системные DNS-серверы по умолчанию.

 -----

`proxy_state` включает/отключает исходящий прокси.  В поле Extra нужно добавить информацию:

`enable:true` или `enable:false` активирует или деактивирует исходящий прокси соответственно.

-----

`proxy_default` устанавливает прокси из списка ранее добавленных по умолчанию или создаёт новый, если сервер ранее не добавлялся.

Укажите дополнительные данные:

`server:[name]`, где `[name]` — имя исходящего прокси из списка.

Или вы можете настроить параметры сервера вручную:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

`proxy_remove` удаляет прокси-сервер из списка ранее добавленных.

`server:[name]`, где `[name]` — имя исходящего прокси из списка.

Or you can configure remove parameters manually:

`server:[type=…&host=…&port=…&username=…&password=…&udp=…&trust=…]`.

- **Обязательные параметры**:

`[type]` — тип прокси-сервера:

- HTTP
- SOCKS4
- SOCKS5
- HTTPS_CONNECT

`[host]` — исходящий прокси-домен или IP-адрес;

`[port]` — исходящий порт прокси (целое число от 1 до 65535);

- **Дополнительные параметры**:

 `[login and password]` — только если этого требует прокси. Эти данные игнорируются при настройке **SOCKS4**;

 `[udp]` применяется только на **серверах типа SOCKS5** и включает опцию **UDP через SOCKS5**. Необходимо установить значение **true или false**;

 `[trust]` применяется только для типа сервера: **HTTPS_CONNECT** и включает опцию **Trust any certificates**. Необходимо указать значение **true или false**.

:::note Пример

`настройка по имени сервера`: server:MyServer

`настройка вручную`: server:host=1.2.3.4&port=80&type=SOCKS5&username=foo&password=bar&udp=true

:::

**Don't forget to include the password as an extra and mention package name and class. Это нужно делать для каждого интента.**

Extra: `password:*******`

Package: `com.adguard.android`

Класс: `com.adguard.android.receiver.AutomationReceiver`

:::note

До версии 4.0 класс назывался `com.adguard.android.receivers.AutomationReceiver`, но затем мы изменили его название на `com.adguard.android.receiver.AutomationReceiver`. Если вы пользовались этой функцией, пожалуйста, используйте новое название.

:::

### Выполнение без уведомлений

Чтобы не получать уведомления, добавьте `quiet: true` в одно из полей Extra.

### Пример

![Автоматизация *mobile](https://cdn.adtidy.org/content/kb/ad_blocker/android/solving_problems/tasker/automation2.png)
