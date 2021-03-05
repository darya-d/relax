<p align="right">
<a href="../en/commands.md">English description</a> | Описание на русском
</p>

# Команды TARS-CLI

Поговорим о каждой команде отдельно.

## Command list

-   [tars init](#tars-init) — инициализирует TARS.
-   [tars dev](#tars-dev) — запускает dev-режим сборки.
-   [tars build](#tars-build) — запускает build-режим сборки.
-   [tars start](#tars-start-taskname) — запускает любой gulp-таск из gulpfile в текущей директории.
-   [tars add-component](#tars-add-component-componentname) — добавляет компонент (модуль) в markup/components.
-   [tars add-page](#tars-add-page-pagename) — добавляет страницу в markup/pages.
-   [tars update](#tars-update) — обновляет TARS-CLI.
-   [tars update-project](#tars-update-project) — обновляет TARS В текущем проекте.

## tars init

Данная команда позволяет инициализировать TARS в текущей директории. Запускает команду `gulp init` в TARS.

Данная команда скачает TARS из оригинального репозитория или по url, который будет передан с ключом `-s` или `--source`. То есть вы можете создать свой собственный форк TARS, и использовать его.

Доступен интерактивный режим по умолчанию. Вы сможете очистить текущую директорию для проекта или создать новую. Затем CLI поможет вам с настройкой конфигурации проекта. Можно выбрать шаблонизатор, препроцессор, показывать ли системные нотификации, с какой плотностью пикселей поддерживать экраны и т.д. Если интерактивный режим не нужен, команда должна запускаться со флагом `--silent`.

### Доступные флаги

-   `--silent`: запускает init без интерактивного режима.
-   `--exclude-html`: файлы шаблонизатора обновляются по умолчанию. Такое поведение можно отменить, используя данный флаг.
-   `--exclude-css`: файлы css-препроцессора обновляются по умолчанию. Такое поведение можно отменить, используя данный флаг.
-   `-s`, `--source`: по умолчанию init скачивает из репозитория TARS последнюю версию сборщика и распаковывает в текущей директории. С помощью флага `-s` можно определить, откуда скачивать zip-архив с TARS, если у вас есть своя собственная сборка TARS.

`--exclude-html` и `--exclude-css` могут быть полезны в случае обновления с кастомным архивом TARS.

**Внимание, флаг -s (--source) всегда должен быть последним!**

### Пример использования команды

```bash
# Запустит init в интерактивном режиме
tars init

# Запустит init без интерактивного режима
tars init --silent

# Скачает TARS с http://url.to.tars.zip и заинитит проект в интерактивном режиме
tars init -s http://url.to.tars.zip

# Скачает TARS с http://url.to.tars.zip и заинитит проект без интерактивного режима
tars init --silent --source http://url.to.tars.zip

# Скачает TARS с http://url.to.tars.zip и заинитит проект в интерактивном режиме без обновления файлов шаблонизатора
tars init --exclude-html -s http://url.to.tars.zip
```

[Назад, к списку команд.](#command-list)

## tars dev

Данная команда запускает dev-сборку, с запуском вотчеров. Запускает команду `gulp dev` в TARS.

Доступен интерактивный режим при запуске команды без флагов. Можно выбрать дополнительные опции dev-сборки, доступные через флаги. Если необходимо запустить команду без флагов и без интерактивного режима, используйте флаг `--silent`.

### Доступные флаги

-   `-l`, `--livereload`, `--lr`: запускает лайврелоад в браузере.
-   `-t`, `--tunnel`: инициализация проекта с расшариванием верстки во внешний веб.
-   `--ie8`: включить в сборку стили для ie8.
-   `--ie9`: включить в сборку стили для ie9.
-   `--ie`: включить в сборку стили для ie8 и ie9.
-   `--silent`: запускает сборку без интерактивного режима.
-   `--custom-flags`: позволяет использовать кастомные флаги с dev-командой. Пример использования описан ниже. В интерактивном режиме флаги перечисляются через пробел без кавычек и запятых. **Внимание, опция должна идти последней!**

### Пример использования команды

```bash
# Будет запущен интерактивный режим
tars dev

# Команда будет запущена без флагов и без интерактивного режима
tars dev --silent

# Будет запущен сервер для livereload
tars dev -l

# Будет запущен сервер для livereload и создан туннель во внешний веб + поддержка ie8
tars dev --tunnel --ie8

# Будет запущен сервер для livereload и создан туннель во внешний веб + поддержка ie8 и ie9 + два кастомных флага
tars dev --tunnel --ie --custom-flags '--custom-flag1 --custom-flag2'
```

[Назад, к списку команд.](#command-list)

## tars build

Данная команда запускает конечную сборку проекта, без запуска вотчеров. Запускает команду `gulp build` в TARS.

Доступен интерактивный режим при запуске команды без флагов. Можно выбрать дополнительные опции build-сборки, доступные через флаги. Если необходимо запустить команду без флагов и без интерактивного режима, используйте флаг `--silent`.

### Доступные флаги

-   `-m`, `--min`: в html подключаются минимизированные файлы.
-   `-r`, `--release`: в html подключаются минимизированные файлы, в названии которых есть hash. Данный режим полезен, если вы напрямую выкладываете верстку на сервер.
-   `--ie8`: включить в сборку стили для ie8.
-   `--ie9`: включить в сборку стили для ie9.
-   `--ie`: включить в сборку стили для ie8 и ie9.
-   `--silent`: запускает сборку без интерактивного режима.
-   `--custom-flags`: позволяет использовать кастомные флаги с build-командой. Пример использования описан ниже. В интерактивном режиме флаги перечисляются через пробел без кавычек и запятых. **Внимание, опция должна идти последней!**

### Пример использования команды

```bash
# Будет запущен интерактивный режим
tars build

# Команда будет запущена без флагов и без интерактивного режима
tars build --silent

# Будет создана версия сборки с минифицированными файлами
tars build -m

# Будет создана release-версия сборки + поддержка ie8
tars build --release --ie8

# Будет создана release-версия сборки + поддержка ie8 и ie9 + два кастомных флага
tars build --release --ie --custom-flags '--custom-flag1 --custom-flag2'
```

[Назад, к списку команд.](#command-list)

## tars start %taskName%

Вы можете запустить любой таск из локального gulpfile проекта (или вообще из любого gulpfile в текущей директории). Важно, чтобы TARS был инициализирован. Команда нужна, чтобы можно было легко расширять существующий набор команд в TARS-CLI своими собственными. Интерактивный режим не доступен.

### Доступные флаги

-   `--flags`: позволяет использовать флаги с %taskName%. Пример использования описан ниже. В интерактивном режиме флаги перечисляются через пробел без кавычек и запятых. **Внимание, опция должна идти последней!**

### Пример использования команды

```bash
# Запустит dev-таск из локального gulpfile
tars start dev

# Запустит dev-таск с флагом --lr из локального gulpfile
tars start dev --flags '--lr'

# Запустит dev-таск с флагами --lr и --ie из локального gulpfile
tars start dev --flags '--lr --ie'
```

[Назад, к списку команд.](#command-list)

## tars add-component %componentName%

Команда добавляет компонент (модуль) в проект. В качестве параметра принимает имя компонента. Если компонент уже существует, будет выдана соответствующая ошибка. Чтобы создать компонент с готовыми файлами — необходимо пользоваться флагами.

Доступен интерактивный режим при запуске команды без флагов. Можно выбрать файлы и папки, которые должны быть созданы вместе с компонентом.

### Доступные флаги

-   `-f`, `--full`: добавляет компонент со всеми папками и файлами, которые могут быть в компоненту: папка для assets, ie, data + файл выбранного шаблонизатора, js и выбранного препроцессора.
-   `-b`, `--basic`: добавляет только основные файлы.
-   `-d`, `--data`: добавляет папку для data. Также создается файл с данными со следующим содержанием:

```javascript
componentName: {
}
```

-   `-i`, `--ie`: добавляет папку для стилей для IE.
-   `-a`, `--assets`: добавляет папку для assets.
-   `-t`, `--template`: создается новый компонент, который является копией шаблонного компонента \_template. Таким образом, вы можете создать свой шаблон для компонента и использовать его при создании новых компонентов. **Важно, чтобы компонент \_template существовал в markup/components!** В результате работы команды создается точная копия компонента \_template, с именем %componentName%. Переименованием файлов внутри нового компонента придется заниматься руками, так как сборщику не известно, какую структуру файлов и папок создаст пользователь в шаблонном компоненте.
-   `-s`, `--scheme`: создает новый компонент на основе файла схемы. После этого флага можно передать имя файла со схемой. По умолчанию используется default_component_scheme в папке с компонентами. Подробнее про файл схемы компоненты можно прочесть [тут](component-scheme.md).
-   `--custom-path`: позволяет указать кастомный путь для нового компонента. Данный флаг удобно использовать, если создаются вложенные компоненты.
-   `-e`, `--empty`: добавляет только папку компонента, без файлов.

Ключи имеют следующий приоритет:

-   `-s`
-   `-t`
-   `-e`
-   `-f`
-   `other`

Иными словами, если вы используете `-d -b` и `-e`, будет создана пустая папка для компонента, так как `-e` имеет больший приоритет. Тоже касается интерактивного режима. Если будут выбраны пункты "Полная версия компонента" и "Пустая папка", то будет создана только пустая папка.

### Пример использования команды

```bash
# Будет запущен интерактивный режим добавления компонента с именем "sidebar"
tars add-component sidebar

# Добавит компонент "sidebar" с базовыми файлами и папкой assets
tars add-component sidebar -b -a

# Добавит компонент "sidebar" с базовыми файлами, папкой assets и папкой для данных
tars add-component sidebar -b -a -d

# Добавит компонент "sidebar" со всеми файлами и папками
tars add-component sidebar --full

# Добавит компонент "sidebar" на основе компонента _template
tars add-component sidebar --template

# Добавит в компоненты пустую папку с именем "sidebar"
tars add-component sidebar -e -b -a -d -i

# Добавит компонент с именем "sidebar" на основе файла схемы
# default_component_scheme.json
tars add-component sidebar -s

# Добавит компонент с именем "sidebar" в папку с компонентом example.
# Компонент будет создан на основе на основе файла схемы
# custom_scheme.json
tars add-component sidebar -s custom_scheme --custom-path example
```

[Назад, к списку команд.](#command-list)

## tars add-page %pageName%

Команда добавляет новую страницу в markup/pages. В качестве параметра принимает имя страницы. Если страница уже существует, будет выдана соответствующая ошибка. Есть возможность добавить как пустую страницу, так и копию шаблонной. Если в имени новой страницы будет указано расширение, то для ее создания будет использован шаблон точно с таким же расширением. Если расширение не указано, то страницы будет создана с расширением по умолчанию для данного шаблонизатора: для Jade — .jade, для Handlebars — .html.

Интерактивный режим не доступен.

### Доступные флаги

-   `-e`, `--empty`: добавит пустую страницу.

### Пример использования команды

```bash
# Будет создана страница inner.{html, jade} на основе _template.{html, jade}
tars add-page inner

# Будет создана страница inner.html на основе _template.html
tars add-page inner.html

# Будет создана пустая страница inner.html
tars add-page inner -e
```

[Назад, к списку команд.](#command-list)

## tars update

Обновит текущую версию TARS-CLI до последней доступной. Под капотом запускает npm update -g tars-cli. Если установка производилась с правами суперюзера (sudo), то обновление необходимо запускать с теми же правами.
Также может возникнуть проблема, что у вас устанавливается старая версия TARS-CLI. Для этог онеобходимо очистить кэш NPM и повторить обновление:

```bash
npm cache clean
```

Интерактивный режим не доступен.

### Пример использования команды

```bash
tars update
```

## tars update-project

Обновит текущую версию TARS в открытом проекте до последней доступной. **Перед тем, как обновлять проект, убедитесь, что используется последняя версия TARS-CLI!**

### Доступные флаги

-   `-f`, `--force`: по умолчанию, если текущая версия TARS является последней доступной, обновление не произойдет. Используйте этот флаг, если вы все равно хотите обновить проект.
-   `--exclude-html`: файл \_template.{html,hbs,jade} обновляется по умолчанию. Такое поведение можно отменить, используя данный флаг.
-   `--exclude-css`: sprite-templates обновляются по умолчанию. Такое поведение можно отменить, используя данный флаг.
-   `-s`, `--source`: вы можете обновить текущую версию TARS в открытом проекте, используя любой архив с TARS как при [tars init](#tars-init).

`--exclude-html` и `--exclude-css` могут быть полезны в случае обновления с кастомным архивом TARS.

Алгоритм обновления проекта описан [тут](update-actions.md).

Интерактивный режим не доступен.

### Пример использования команды

```bash
# Запуск обновления TARS в проекте
tars update-project

# Запуск обновления TARS в проекте без обновления файлов css-препроцессора
tars update-project --exclude-css

# Запуск обновления TARS в проекте на основе архива из http://url.to.tars.zip
tars update-project -s http://url.to.tars.zip

# Запуск обновления TARS в проекте на основе архива из http://url.to.tars.zip без обновления файлов шаблонизатора
tars update-project --exclude-html -s http://url.to.tars.zip
```

## tars add-module %moduleName%

Алиас к [tars add-component](#tars-add-components-componentname).

[Назад, к списку команд.](#command-list)