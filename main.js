document.addEventListener('DOMContentLoaded', () => {

    // --- LÓGICA DE LA BARRA DE BÚSQUEDA ---
    const data = [
    {
      id: "Paradise Kiss (Josei)",
      archivo: "animes/paradise-kiss/83.html",
      imagen: "https://pbs.twimg.com/media/GcEGWJKWgAAf0M-?format=jpg&name=large"
    },
    {
      id: "Nana (Josei)",
      archivo: "animes/nana/28.html",
      imagen: "https://pbs.twimg.com/media/GbtujYJWcBc2Y75?format=jpg&name=4096x4096"
    },
    {
      id: "Aika (Seinen)",
      archivo: "animes/aika/102.html",
      imagen: "https://pbs.twimg.com/media/GcNwvPXXIAAFJ1y?format=jpg&name=medium"
    },
    {
      id: "Monster (Seinen)",
      archivo: "animes/monster/26.html",
      imagen: "https://pbs.twimg.com/media/Gbtxp1dWwAAGZvp?format=jpg&name=4096x4096"
    },

    {
      id: "Beck (Seinen)",
      archivo: "animes/beck/12.html",
      imagen: "https://pbs.twimg.com/media/Gbtx82aXQBESrdw?format=jpg&name=large"
    },

    {
      id: "School Rumble (Shonen)",
      archivo: "animes/school-rumble/24.html",
      imagen: "https://pbs.twimg.com/media/Gbtyj1CWICIGole?format=jpg&name=4096x4096"
    },

    {
      id: "Parasyte (Seinen)",
      archivo: "animes/parasyte/17.html",
      imagen: "https://pbs.twimg.com/media/Gbt7o-nXkBAuJQ-?format=jpg&name=large"
    },

    {
      id: "Great Teacher Onizuka (Shonen)",
      archivo: "animes/great-teacher-onizuka/27.html",
      imagen: "https://pbs.twimg.com/media/Gbt8EeEWUAMFsP8?format=jpg&name=large"
    },

    {
      id: "Shonan Junai Gumi (Shonen)",
      archivo: "animes/shonan-junai-gumi/15.html",
      imagen: "https://pbs.twimg.com/media/Gbt8hSfWMAMwqLM?format=jpg&name=large"
    },

    {
      id: "Berserk (Seinen)",
      archivo: "animes/berserk/16.html",
      imagen: "https://pbs.twimg.com/media/Gbt846HW8AER9r9?format=jpg&name=medium"
    },

    {
      id: "Get Backers (Shonen)",
      archivo: "animes/get-backers/19.html",
      imagen: "https://pbs.twimg.com/media/Gbt9xDjXYA4BZWJ?format=jpg&name=large"
    },
    {
      id: "Mushishi (Seinen)",
      archivo: "animes/mushishi/31.html",
      imagen: "https://pbs.twimg.com/media/Gbt-KOoWEAE6E9M?format=jpg&name=900x900"
    },
    {
      id: "Banana Fish (Shojo)",
      archivo: "animes/banana-fish/29.html",
      imagen: "https://pbs.twimg.com/media/Gbt-f6AXIBAdd8p?format=jpg&name=4096x4096"
    },
    {
      id: "Fooly Cooly (Seinen)",
      archivo: "animes/flcl/13.html",
      imagen: "https://pbs.twimg.com/media/GbuBUqMWUBspHSl?format=jpg&name=medium"
    },
    {
      id: "Gun Frontier (Seinen)",
      archivo: "animes/gun-frontier/21.html",
      imagen: "https://pbs.twimg.com/media/GbuBrOiWEAkVj74?format=jpg&name=4096x4096"
    },
    {
      id: "Serial Experiments Lain (Seinen)",
      archivo: "animes/serial-experiments-lain/23.html",
      imagen: "https://pbs.twimg.com/media/GbuCBT-W4BAeyTW?format=jpg&name=4096x4096"
    },
    {
      id: "Trigun (Shonen)",
      archivo: "animes/trigun/20.html",
      imagen: "https://pbs.twimg.com/media/GbuCqeZWYA403Bl?format=jpg&name=4096x4096"
    },
    {
      id: "XxxHolic (Seinen)",
      archivo: "animes/xxxholic/25.html",
      imagen: "https://pbs.twimg.com/media/GbuC_zxXMAA0Ks7?format=jpg&name=large"
    },
    {
      id: "Madonna (Seinen)",
      archivo: "animes/madonna/6.html",
      imagen: "https://pbs.twimg.com/media/GbuDo9nWAAYPDo5?format=jpg&name=large"
    },
    {
      id: "Sakamichi No Apollon (Josei)",
      archivo: "animes/sakamichi-no-apollon/30.html",
      imagen: "https://pbs.twimg.com/media/GbuEAMxWAAkbkgb?format=jpg&name=large"
    },
    {
      id: "Lovely Complex (Shojo)",
      archivo: "animes/lovely-complex/18.html",
      imagen: "https://pbs.twimg.com/media/Gbt9SQWWsBwRYpL?format=jpg&name=large"
    },
{
      id: "Gokusen (Josei)",
      archivo: "animes/gokusen/9.html",
      imagen: "https://pbs.twimg.com/media/GbuEWM1W8BoaP2k?format=jpg&name=medium"
    },
{
      id: "Golden Boy (Seinen)",
      archivo: "animes/golden-boy/14.html",
      imagen: "https://pbs.twimg.com/media/GbuEsEYWUA4dtEU?format=jpg&name=4096x4096"
    },
{
      id: "Abashiri Ikka (Shonen)",
      archivo: "animes/abashiri-ikka/11.html",
      imagen: "https://pbs.twimg.com/media/GbuFYKgXUAQuqNQ?format=jpg&name=large"
    },
{
      id: "Emblen Take 2 (Seinen)",
      archivo: "animes/emblen-take-2/10.html",
      imagen: "https://pbs.twimg.com/media/GbvDot7XkAYuyNn?format=jpg&name=large"
    },
{
      id: "Kyou Kara Ore Wa!! (Shonen)",
      archivo: "animes/kyou-kara-ore-wa/33.html",
      imagen: "https://pbs.twimg.com/media/GbvD40PXQAM7qar?format=jpg&name=medium"
    },
{
      id: "Death Note (Shonen)",
      archivo: "animes/death-note/22.html",
      imagen: "https://pbs.twimg.com/media/GbvEIFsX0AkQ1Zu?format=jpg&name=large"
    },
{
      id: "Angel Densetsu (Shonen)",
      archivo: "animes/angel-densetsu/8.html",
      imagen: "https://pbs.twimg.com/media/GbvEYZ7WMAkC0lm?format=jpg&name=900x900"
    },
{
      id: "Nodame Cantabile (Josei)",
      archivo: "animes/nodame-cantabile/34.html",
      imagen: "https://pbs.twimg.com/media/GbvEk69W4AsvlGB?format=jpg&name=medium"
    },
{
      id: "Chameleon Bite Me! (Seinen)",
      archivo: "animes/chameleon-bite-me/32.html",
      imagen: "https://pbs.twimg.com/media/GbkfsxFXMAAw5Xo?format=jpg&name=medium"
    },
{
      id: "Cleopatra DC (Shonen)",
      archivo: "animes/cleopatra-dc/7.html",
      imagen: "https://pbs.twimg.com/media/GbvEunWXYBINtiF?format=jpg&name=medium"
    },
{
      id: "Megami Paradise (Shojo)",
      archivo: "animes/megami-paradise/1.html",
      imagen: "https://pbs.twimg.com/media/GbkcjUFXwAAtQv4?format=jpg&name=900x900"
    },
{
      id: "Abenobashi Mahou Shoutengai (Seinen)",
      archivo: "animes/abenobashi-mahou-shoutengai/35.html",
      imagen: "https://pbs.twimg.com/media/GcC9S8LWkAEjZ9y?format=jpg&name=900x900"
    },
{
      id: "Aishite Knight (Shojo)",
      archivo: "animes/aishite-knight/37.html",
      imagen: "https://pbs.twimg.com/media/GcC-g_AXIAAscvt?format=jpg&name=large"
    },
    {
      id: "Burning Blood (Shonen)",
      archivo: "animes/Burning-blood/36.html",
      imagen: "https://pbs.twimg.com/media/GbkjLHcWkAA06fy?format=jpg&name=900x900"
    },
    {
      id: "Hareluya II Boy (Shonen)",
      archivo: "animes/hareluya-boy/104.html",
      imagen: "https://pbs.twimg.com/media/GbknATyWQAAugDR?format=jpg&name=4096x4096"
    },
    {
      id: "Gokinjo Monogatari La Película (Shojo)",
      archivo: "animes/gokinjo-monogatari-movie/46.html",
      imagen: "https://pbs.twimg.com/media/GbknZ44X0AACV9J?format=jpg&name=large"
    },
    {
      id: "Aoki Densetsu Shoot (Shonen)",
      archivo: "animes/aoki-densetsu-shoot/49.html",
      imagen: "https://pbs.twimg.com/media/GcC-w77WgAAFVaT?format=jpg&name=medium"
    },
    {
      id: "Ashita No Eleven Tachi (Shonen)",
      archivo: "animes/ashita-no-eleven-tachi/50.html",
      imagen: "https://pbs.twimg.com/media/GcC_BMqWoAA7c3B?format=jpg&name=small"
    },
    {
      id: "Assemble Insert (Shonen)",
      archivo: "animes/assemble-insert/51.html",
      imagen: "https://pbs.twimg.com/media/GcC_pqLWMAATDsy?format=jpg&name=medium"
    },
    {
      id: "Azusa, Otetsudai Shimasu! (Shonen)",
      archivo: "animes/azusa,-otetsudai-shimasu/52.html",
      imagen: "https://pbs.twimg.com/media/GcDBd8uWUAAXrEg?format=jpg&name=medium"
    },
    {
      id: "Bari Bari Densetsu (1987) (Shonen)",
      archivo: "animes/bari-bari-densetsu/53.html",
      imagen: "https://pbs.twimg.com/media/GcDBQVwWkAAN67G?format=jpg&name=small"
    },
    {
      id: "Black Magic M-66 (Seinen)",
      archivo: "animes/black-magic-m-66/54.html",
      imagen: "https://pbs.twimg.com/media/GcDBnewW4AAb_ew?format=jpg&name=medium"
    },
    {
      id: "California Crisis (Seinen)",
      archivo: "animes/california-crisis/55.html",
      imagen: "https://pbs.twimg.com/media/GcDB9PVWUAAreCD?format=jpg&name=4096x4096"
    },
    {
      id: "Call Me Tonight (Seinen)",
      archivo: "animes/call-me-tonight/56.html",
      imagen: "https://pbs.twimg.com/media/GcDCZ1ZXcAA5uym?format=jpg&name=4096x4096"
    },
    {
      id: "Corrector Yui (Shojo)",
      archivo: "animes/corrector-yui/57.html",
      imagen: "https://pbs.twimg.com/media/GcDCyTUW8AA6wZn?format=jpg&name=4096x4096"
    },
    {
      id: "Digital Juice (Seinen)",
      archivo: "animes/digital-Juice/58.html",
      imagen: "https://pbs.twimg.com/media/GcDDBhqWwAAOHSQ?format=jpg&name=small"
    },
    {
      id: "Gantz (Seinen)",
      archivo: "animes/gantz/59.html",
      imagen: "https://pbs.twimg.com/media/GcDDN2PWUAAslUH?format=jpg&name=4096x4096"
    },
    {
      id: "Nozomi Witches (Seinen)",
      archivo: "animes/nozomi-witches/4.html",
      imagen: "https://pbs.twimg.com/media/GbkdRj4W8AAKho3?format=jpg&name=large"
    },
    {
      id: "Bad Boys (Seinen)",
      archivo: "animes/bad-boys/5.html",
      imagen: "https://pbs.twimg.com/media/GbkgL3sXYAE_F3x?format=jpg&name=small"
    },
    {
      id: "Mikeneko Holmes (Seinen)",
      archivo: "animes/mikeneko-holmes/2.html",
      imagen: "https://pbs.twimg.com/media/GbkgjgMXUAA5woh?format=jpg&name=900x900"
    },
    {
      id: "Kyūkyoku Chōjin R (Seinen)",
      archivo: "animes/chojin-r/3.html",
      imagen: "https://pbs.twimg.com/media/GbkhEcMW0AAZcyn?format=jpg&name=900x900"
    },
    {
      id: "Battle Angel Alita (Seinen)",
      archivo: "animes/gunnm/60.html",
      imagen: "https://pbs.twimg.com/media/GcD5Hc4WkAA3Xsz?format=jpg&name=4096x4096"
    },
    {
      id: "Hanappe Bazooka (Seinen)",
      archivo: "animes/hanappe-bazooka/61.html",
      imagen: "https://pbs.twimg.com/media/GcD5hIHXEAEam-q?format=jpg&name=4096x4096"
    },
{
      id: "Danshi Koukousei no Nichijou (Shonen)",
      archivo: "animes/danshi-koukousei-no-nichijou/62.html",
      imagen: "https://pbs.twimg.com/media/GcD6gElXsAA_5Nm?format=jpg&name=4096x4096"
    },
    {
      id: "Doubutsu no Mori (Kodomo)",
      archivo: "animes/doubutsu-no-mori/63.html",
      imagen: "https://pbs.twimg.com/media/GcD64xyWwAAjDTa?format=jpg&name=large"
    },
    {
      id: "Hataraki Man (Seinen)",
      archivo: "animes/hataraki-man/64.html",
      imagen: "https://pbs.twimg.com/media/GcD7RB1WYAAo44W?format=jpg&name=large"
    },
    {
      id: "houma-hunter-lime (Seinen)",
      archivo: "animes/houma-hunter-lime/65.html",
      imagen: "https://pbs.twimg.com/media/GcD7pZ8W4AAw-1U?format=jpg&name=large"
    },
    {
      id: "Heavy (Shonen)",
      archivo: "animes/heavy/66.html",
      imagen: "https://pbs.twimg.com/media/GcD8BP2WsAAWfpH?format=jpg&name=large"
    },
    {
      id: "Sakigake!! Cromartie Koukou (Shonen)",
      archivo: "animes/cromartie-high-school/68.html",
      imagen: "https://pbs.twimg.com/media/GcD8mO4WsAAHZE5?format=jpg&name=900x900"
    },
    {
      id: "Igano Kabamaru (Shojo)",
      archivo: "animes/igano-kabamaru/67.html",
      imagen: "https://pbs.twimg.com/media/GcD8X-pXAAAO7Pz?format=jpg&name=medium"
    },
    {
      id: "Jungle de Ikou! (Shonen)",
      archivo: "animes/jungle-de-ikou/69.html",
      imagen: "https://pbs.twimg.com/media/GcD87a2WYAAQEDy?format=jpg&name=large"
    },
    {
      id: "Kaichou wa Maid-sama! (Shojo)",
      archivo: "animes/kaichou-wa-maid-sama/70.html",
      imagen: "https://pbs.twimg.com/media/GcD9-_WWMAAtTWh?format=jpg&name=large"
    },
    {
      id: "Kirara (Seinen)",
      archivo: "animes/kirara/71.html",
      imagen: "https://pbs.twimg.com/media/GcD-N-QWYAAbSi6?format=jpg&name=large"
    },
{
      id: "Honoo no Labyrinth (Seinen)",
      archivo: "animes/labyrinth-of-flames/72.html",
      imagen: "https://pbs.twimg.com/media/GcD-fA1XcAAuqy0?format=jpg&name=medium"
    },
    {
      id: "Unkai no Meikyuu Zeguy (Seinen)",
      archivo: "animes/mask-of-zeguy/73.html",
      imagen: "https://pbs.twimg.com/media/GcD-24GWEAAPVjR?format=jpg&name=900x900"
    },
    {
      id: "Master Mosquiton (Shonen)",
      archivo: "animes/master-of-mosquiton/74.html",
      imagen: "https://pbs.twimg.com/media/GcD_LKSWMAA79bV?format=jpg&name=large"
    },
    {
      id: "Mazinkaiser (Shonen)",
      archivo: "animes/mazinkaiser/75.html",
      imagen: "https://pbs.twimg.com/media/GcD_c19XoAAR39x?format=jpg&name=4096x4096"
    },
    {
      id: "Mouse (Seinen)",
      archivo: "animes/mouse/76.html",
      imagen: "https://pbs.twimg.com/media/GcD_qf5XQAAtB06?format=jpg&name=medium"
    },
    {
      id: "Nayuta (Shojo)",
      archivo: "animes/nayuta/77.html",
      imagen: "https://pbs.twimg.com/media/GcD_2BxXkAAuDY5?format=jpg&name=4096x4096"
    },
    {
      id: "Nekojiru-sou (Seinen)",
      archivo: "animes/nekojiru-sou/78.html",
      imagen: "https://pbs.twimg.com/media/GcEAGioWoAAJ4Mo?format=jpg&name=4096x4096"
    },
    {
      id: "Ojousama Sousamou (Seinen)",
      archivo: "animes/ojousama-sousamou/79.html",
      imagen: "https://pbs.twimg.com/media/GcEFGolXsAADwox?format=jpg&name=medium"
    },

    {
      id: "Okusama wa Joshikousei (Seinen)",
      archivo: "animes/okusama-wa-joshikousei/80.html",
      imagen: "https://pbs.twimg.com/media/GcEFpi0XkAAkrPf?format=jpg&name=900x900"
    },
    {
      id: "1 Pound no Fukuin (Shonen)",
      archivo: "animes/one-pound-gospel/81.html",
      imagen: "https://pbs.twimg.com/media/GcEF5A3XEAAsFGm?format=jpg&name=small"
    },
    {
      id: "Onkyo Seimeitai Noiseman (Seinen)",
      archivo: "animes/onkyo-seimeitai-noiseman/82.html",
      imagen: "https://pbs.twimg.com/media/GcEGIdjXEAAmC3m?format=jpg&name=medium"
    },
    {
      id: "koukou-butouden-crows (Shonen)",
      archivo: "animes/koukou-butouden-crows/87.html",
      imagen: "https://pbs.twimg.com/media/GcEHg2nXAAAWyVK?format=jpg&name=900x900"
    },
    {
      id: "Touhai Densetsu Akagi: Yami ni Maiorita Tensai (Seinen)",
      archivo: "animes/akagi/84.html",
      imagen: "https://pbs.twimg.com/media/GcEGkWdWUAAuB3D?format=jpg&name=small"
    },
    {
      id: "Rec (Seinen)",
      archivo: "animes/rec/85.html",
      imagen: "https://pbs.twimg.com/media/GcEG5RUW4AAsBdJ?format=jpg&name=4096x4096"
    },
    {
      id: "Riding Bean (Seinen)",
      archivo: "animes/riding-bean/86.html",
      imagen: "https://pbs.twimg.com/media/GcEHS9PWMAADPNF?format=jpg&name=medium"
    },
    {
      id: "Shinpi no Sekai El-Hazard (Seinen)",
      archivo: "animes/shinpi-no-sekai-el-hazard/88.html",
      imagen: "https://pbs.twimg.com/media/GcEHz4mXsAABbDe?format=jpg&name=4096x4096"
    },
    {
      id: "Koukou Tekken-den Tough (Seinen)",
      archivo: "animes/shootfighter/89.html",
      imagen: "https://pbs.twimg.com/media/GcEJzpNWYAAc8PB?format=jpg&name=medium"
    },
    {
      id: "Shoubushi Densetsu Tetsuya (Shonen)",
      archivo: "animes/shoubushi-densetsu-tetsuya/90.html",
      imagen: "https://pbs.twimg.com/media/GcEMf6BXQAAOYu2?format=jpg&name=4096x4096"
    },
    {
      id: "Sukeban Deka (Shojo)",
      archivo: "animes/sukeban-deka/91.html",
      imagen: "https://pbs.twimg.com/media/GcEMxUsX0AA4fwk?format=jpg&name=large"
    },
    {
      id: "Teizokurei Daydream (Shonen)",
      archivo: "animes/teizokurei-daydream/92.html",
      imagen: "https://pbs.twimg.com/media/GcNuKHSWUAExhDx?format=jpg&name=4096x4096"
    },
    {
      id: "Tenshi Nanka ja Nai (Shojo)",
      archivo: "animes/tenshi-nanka-ja-nai/93.html",
      imagen: "https://pbs.twimg.com/media/GcNuY6JXIAACSvE?format=jpg&name=medium"
    },
    {
      id: "Terra e... (Shonen)",
      archivo: "animes/terra-e/94.html",
      imagen: "https://pbs.twimg.com/media/GcNuppxWMAEDWBV?format=jpg&name=4096x4096"
    },
    {
      id: "Mudazumo Naki Kaikaku: The Legend of Koizumi (Seinen)",
      archivo: "animes/the-legend-of-koizumi/95.html",
      imagen: "https://pbs.twimg.com/media/GcNu6EAWcAAEsMd?format=jpg&name=medium"
    },
    {
      id: "The Samurai (Seinen)",
      archivo: "animes/the-samurai/96.html",
      imagen: "https://pbs.twimg.com/media/GcNvaMjWIAAuJdO?format=jpg&name=small"
    },
    {
      id: "Tobira wo Akete (Kodomo)",
      archivo: "animes/tobira-wo-akete/97.html",
      imagen: "https://pbs.twimg.com/media/GcNvtS9XcAAak23?format=jpg&name=900x900"
    },
    {
      id: "Trava: Fist Planet (Seinen)",
      archivo: "animes/trava/98.html",
      imagen: "https://pbs.twimg.com/media/GcNv_uBW8AAnOwx?format=jpg&name=4096x4096"
    },
    {
      id: "Kyoufu no Bio Ningen Saishuu Kyoushi (Seinen)",
      archivo: "animes/ultimate-teacher/99.html",
      imagen: "https://pbs.twimg.com/media/GcNwRYdXgAA7R9L?format=jpg&name=medium"
    },
    {
      id: "Usagi-chan de Cue!! (Seinen)",
      archivo: "animes/usagi-chan-de-cue/100.html",
      imagen: "https://pbs.twimg.com/media/GcNwgKGXYAAoQHe?format=jpg&name=medium"
    },
    {
      id: "Hikari no Densetsu (Shojo)",
      archivo: "animes/hikari-no-densetsu/103.html",
      imagen: "https://pbs.twimg.com/media/GcNxD68WAAA4bfC?format=jpg&name=medium"
    },
    {
      id: "Monkey Punch: Manga Katsudou Daishashin (Seinen)",
      archivo: "animes/mankatsu/111.html",
      imagen: "https://pbs.twimg.com/media/GblExdLXUAEQ2Qt?format=jpg&name=4096x4096"
    },
    {
      id: "Ore no Sora Keiji-hen (Seinen)",
      archivo: "animes/ore-no-sora/108.html",
      imagen: "https://pbs.twimg.com/media/Gbsfv8_aMAAFwCJ?format=jpg&name=large"
    },
    {
      id: "Yokohama Meibutsu: Otoko Katayama-gumi! (Shonen)",
      archivo: "animes/yokohama-meibutsu/109.html",
      imagen: "https://pbs.twimg.com/media/GbsmYN4aMAAuw_b?format=jpg&name=large"
    },
    {
      id: "Kennedy Knights pilot (Shonen)",
      archivo: "animes/kennedy-knights/106.html",
      imagen: "https://pbs.twimg.com/media/GbsoxQmWkAwko9z?format=jpg&name=large"
    },
    {
      id: "Mellow (Seinen)",
      archivo: "animes/mellow/105.html",
      imagen: "https://pbs.twimg.com/media/Gbso9eXawAAlKke?format=jpg&name=900x900"
    },
    {
      id: "Seishun Fuufu Monogatari Koiko no Mainichi (Seinen)",
      archivo: "animes/koiko-no-mainichi/110.html",
      imagen: "https://pbs.twimg.com/media/GbsprMra4AA81qu?format=jpg&name=large"
    },
    {
      id: "Yakyuukyou no Uta (Raw)", 
      archivo: "animes/yakyuukyou-no-uta/122.html",
      imagen: "https://pbs.twimg.com/media/GeAdNVMWIAAOfWk?format=png&name=small"
    },
    {
      id: "Futarigurashi (Raw)",
      archivo: "animes/futarigurashi/121.html",
      imagen: "https://pbs.twimg.com/media/GeAdTEtWoAAHtGn?format=png&name=large"
    },
    {
      id: "Koume-chan ga Iku! (Seinen)",
      archivo: "animes/koume-chan-ga-iku/127.html",
      imagen: "https://pbs.twimg.com/media/Gd83jCgXYAA6bkT?format=jpg&name=4096x4096"
    },
    {
      id: "Naki no Ryuu: Hiryuu no Shou (Seinen)",
      archivo: "animes/naki-no-ryuu-1995/130.html",
      imagen: "https://pbs.twimg.com/media/Gvw2P4HWsAEzlyY?format=jpg&name=large"
    },
{
      id: "UFO Princess Valkyrie (Shonen)",
      archivo: "animes/princess-valkyrie/135.html",
      imagen: "https://pbs.twimg.com/media/Gv58XldW0AAv9lD?format=jpg&name=4096x4096"
    },
{
      id: "Tattoon Master (Shonen)",
      archivo: "animes/tatton-master/136.html",
      imagen: "https://pbs.twimg.com/media/Gv59PcNWUAAG6_f?format=jpg&name=4096x4096"
    },

{
      id: "Miami Guns (Shonen)",
      archivo: "animes/miami-guns/137.html",
      imagen: "https://pbs.twimg.com/media/Gv59nKHX0AAH7kF?format=jpg&name=4096x4096"
    },

{
      id: "One Outs (Seinen)",
      archivo: "animes/one-outs/138.html",
      imagen: "https://pbs.twimg.com/media/Gv5-AloXcAABNm0?format=png&name=large"
    },

{
      id: "Tenjou Tenge (Seinen)",
      archivo: "animes/tenjou-tenge/139.html",
      imagen: "https://pbs.twimg.com/media/Gv5-iSwXcAEST4x?format=png&name=large"
    },
{
      id: "I My Me! Strawberry Eggs (Shonen)",
      archivo: "animes/strawberry-eggs/140.html",
      imagen: "https://pbs.twimg.com/media/Gv5_TiFXIAAUXjO?format=png&name=large"
    },
{
      id: "Moldiver (Shonen)",
      archivo: "animes/moldiver/141.html",
      imagen: "https://pbs.twimg.com/media/Gv5_4wDW0AAM1fJ?format=jpg&name=4096x4096"
    },
{
      id: "Ace wo Nerae! (shojo)",
      archivo: "animes/ace-wo-nerae/142.html",
      imagen: "https://pbs.twimg.com/media/Gv6AY_EXEAAEjj4?format=png&name=small"
    },
{
      id: "Ashita no Joe (Shonen)",
      archivo: "animes/ashita-no-joe/143.html",
      imagen: "https://pbs.twimg.com/media/Gv6BFIYXEAAuaNX?format=png&name=900x900"
    },
{
      id: "Hyper Police (Seinen)",
      archivo: "animes/hyper-police/144.html",
      imagen: "https://pbs.twimg.com/media/Gv6Bj5LX0AAhYXz?format=png&name=large"
    },
{
      id: "Peach Girl (Shojo)",
      archivo: "animes/peach-girl/145.html",
      imagen: "https://pbs.twimg.com/media/Gv6B8akWIAA3Zho?format=png&name=large"
    },
{
      id: "Ryuusei Sentai Musumet (Seinen)",
      archivo: "animes/ryuusei-sentai-musumet/146.html",
      imagen: "https://pbs.twimg.com/media/Gv6CdjRXwAAfTEb?format=png&name=medium"
    },
{
      id: "Yamato Nadeshiko Shichihenge♥ (Shojo)",
      archivo: "animes/yamato-nadeshiko/147.html",
      imagen: "https://pbs.twimg.com/media/Gv6DAFhWwAEkumZ?format=png&name=large"
    },
{
      id: "Buttobi!! CPU (Seinen)",
      archivo: "animes/buttobi-cpu/148.html",
      imagen: "https://pbs.twimg.com/media/Gv6EpyxXQAA-iWt?format=png&name=large"
    },
{
      id: "Bokura wa Minna Kawai-sou (Seinen)",
      archivo: "animes/bokura-wa-minna-kawai-sou/149.html",
      imagen: "https://pbs.twimg.com/media/Gv6FALEWkAAaVdD?format=png&name=4096x4096"
    },
{
      id: "Steel Angel Kurumi (Shonen)",
      archivo: "animes/steel-angel-kurumi/150.html",
      imagen: "https://pbs.twimg.com/media/Gv6GuWlW8AAQ9p2?format=png&name=900x900"
    },
{
      id: "Rakushou! Hyper Doll (Shonen)",
      archivo: "animes/hyper-doll/151.html",
      imagen: "https://pbs.twimg.com/media/Gv6HhgEWQAA89On?format=png&name=4096x4096"
    },
{
      id: "Air Gear (Shonen)",
      archivo: "animes/air-gear/152.html",
      imagen: "https://pbs.twimg.com/media/Gv6H7yfXUAEXzzj?format=png&name=4096x4096"
    },
{
      id: "Power Dolls (Shonen)",
      archivo: "animes/power-dolls/153.html",
      imagen: "https://pbs.twimg.com/media/Gv6IXyDXMAA7tzj?format=png&name=medium"
    },
{
      id: "Kyoukasho ni Nai! (Seinen)",
      archivo: "animes/kyoukasho-ni-nai/154.html",
      imagen: "https://pbs.twimg.com/media/Gv6MSM6XAAEnANk?format=png&name=large"
    },
{
      id: "Maison Ikkoku (Seinen)",
      archivo: "animes/maison-ikkoku/155.html",
      imagen: "https://pbs.twimg.com/media/Gv6Mw6NXgAADn2s?format=png&name=4096x4096"
    },

{
      id: "Meitantei Holmes (Kodomo)",
      archivo: "animes/meitantei-holmes/156.html",
      imagen: "https://pbs.twimg.com/media/Gv6NSV4W0AASTIw?format=png&name=4096x4096"
    },
{
      id: "Master Keaton (Seinen)",
      archivo: "animes/master-keaton/157.html",
      imagen: "https://pbs.twimg.com/media/Gv6NoR9WEAAR_ED?format=png&name=large"
    },
{
      id: "Solty Rei (Shonen)",
      archivo: "animes/solty-rei/158.html",
      imagen: "https://pbs.twimg.com/media/Gv6N8C4XkAEri-C?format=png&name=4096x4096"
    },
{
      id: "Spirit of Wonder: China-san Tanpenshuu (Seinen)",
      archivo: "animes/spirit-of-wonder/159.html",
      imagen: "https://pbs.twimg.com/media/GwQHJtpWgAA_Jfm?format=png&name=medium"
    },

{
      id: "Scryed (Shonen)",
      archivo: "animes/scryed/160.html",
      imagen: "https://pbs.twimg.com/media/Gv6OyWXX0AAYKrI?format=png&name=4096x4096"
    },

{
      id: "Muteki Kanban Musume (Shonen)",
      archivo: "animes/muteki-kanban-musume/161.html",
      imagen: "https://pbs.twimg.com/media/Gv6RpA3XgAAEVtm?format=png&name=medium"
    },

{
      id: "Sakura Tsuushin (Seinen)",
      archivo: "animes/sakura-tsuushin/162.html",
      imagen: "https://pbs.twimg.com/media/Gv6SRXaWYAARGZ8?format=jpg&name=medium"
    },
{
      id: "Mushrambo (Shonen)",
      archivo: "animes/mushrambo/163.html",
      imagen: "https://pbs.twimg.com/media/Gv6Squ3XkAAuB00?format=png&name=large"
    },
{
      id: "Bakuretsu Hunters (Shonen)",
      archivo: "animes/bakutesu-hunters/164.html",
      imagen: "https://pbs.twimg.com/media/Gv6THRyXMAAAMeb?format=png&name=large"
    },
{
      id: "Vandread (Shonen)",
      archivo: "animes/vandread/165.html",
      imagen: "https://pbs.twimg.com/media/Gv6TkXQWsAA8orH?format=png&name=4096x4096"
    },
{
      id: "Yaiba (Shonen)",
      archivo: "animes/yaiba/166.html",
      imagen: "https://pbs.twimg.com/media/Gv6T5RXWYAAuI2j?format=png&name=large"
    },
{
      id: "Shoujo Kakumei Utena (Shojo)",
      archivo: "animes/utena-girl-revolution/167.html",
      imagen: "https://pbs.twimg.com/media/GwVW6prWcAEvrQe?format=jpg&name=large"
    },
{
      id: "Bobobo-bo Bo-bobo (Shonen)",
      archivo: "animes/bobobo/168.html",
      imagen: "https://pbs.twimg.com/media/GwVXD-CWgAI4TD6?format=jpg&name=large"
    },
{
      id: "Ike! Ina-chuu Takkyuu-bu (Seinen)",
      archivo: "animes/ike-ina-chuu/169.html",
      imagen: "https://pbs.twimg.com/media/GuwrrSTXAAICgtZ?format=png&name=small"
    },


  ];

  
    const input = document.getElementById("busqueda");
    const resultados = document.getElementById("resultados");
  
    // Esta función se ejecuta cada vez que el usuario escribe en la barra
    function filtrarResultados() {
      const texto = input.value.toLowerCase();
      resultados.innerHTML = "";
  
      if (texto === "") {
        resultados.style.display = "none";
        return;
      }
  
      const filtrados = data.filter(item =>
        item.id.toLowerCase().includes(texto)
      );
  
      if (filtrados.length === 0) {
        resultados.textContent = "No se encontraron resultados.";
      } else {
        filtrados.forEach(item => {
          const contenedor = document.createElement("div");
  
          const img = document.createElement("img");
          img.src = item.imagen;
          img.alt = item.id;
  
          const enlace = document.createElement("a");
          enlace.href = item.archivo;
          enlace.textContent = item.id;
  
          contenedor.appendChild(img);
          contenedor.appendChild(enlace);
          resultados.appendChild(contenedor);
        });
      }
  
      resultados.style.display = "block";
    }
  
    // Se asegura de que el input de búsqueda exista antes de añadir el evento
    if (input) {
      input.addEventListener("input", filtrarResultados);
    }
  

});