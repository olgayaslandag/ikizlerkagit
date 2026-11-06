import path from "node:path";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Proje kök dizinini netleştir; workspace root çıkarım uyarısını sustur.
  outputFileTracingRoot: path.join(process.cwd()),
  reactStrictMode: true,
  output: "standalone",
  trailingSlash: true,
  async redirects() {
    return [
      { source: "/kurumsal/cozum-ortaklari/", destination: "/kurumsal/", permanent: true },
      { source: "/kurumsal/cozum-ortaklari", destination: "/kurumsal/", permanent: true },
      { source: "/hakkimizda/", destination: "/kurumsal/", permanent: true },
      { source: "/hakkimizda", destination: "/kurumsal/", permanent: true },

      // Eski WordPress haber/blog URL'leri -> yeni /haberler/<slug>/ adresleri (301)
      { source: "/hamur-kitap-ve-temiz-naylon-alimina-baslanmistir.html", destination: "/haberler/hamur-kitap-ve-temiz-naylon-alimina-baslanmistir/", permanent: true },
      { source: "/hamur-kitap-ve-temiz-naylon-alimina-baslanmistir", destination: "/haberler/hamur-kitap-ve-temiz-naylon-alimina-baslanmistir/", permanent: true },
      { source: "/catalca-belediyesi-bolge-calismalari.html", destination: "/haberler/catalca-belediyesi-bolge-calismalari/", permanent: true },
      { source: "/catalca-belediyesi-bolge-calismalari", destination: "/haberler/catalca-belediyesi-bolge-calismalari/", permanent: true },
      { source: "/palet-tesisimiz.html", destination: "/haberler/palet-tesisimiz/", permanent: true },
      { source: "/palet-tesisimiz", destination: "/haberler/palet-tesisimiz/", permanent: true },
      { source: "/tesisimizde-corona-tedbirleri-aliyoruz.html", destination: "/haberler/tesisimizde-corona-tedbirleri-aliyoruz/", permanent: true },
      { source: "/tesisimizde-corona-tedbirleri-aliyoruz", destination: "/haberler/tesisimizde-corona-tedbirleri-aliyoruz/", permanent: true },
      { source: "/catalca-belediyesinde-ilkogretim-ve-ortaogretim-ogrencilerine-etkinlik-duzenledik.html", destination: "/haberler/catalca-belediyesinde-ilkogretim-ve-ortaogretim-ogrencilerine-etkinlik-duzenledik/", permanent: true },
      { source: "/catalca-belediyesinde-ilkogretim-ve-ortaogretim-ogrencilerine-etkinlik-duzenledik", destination: "/haberler/catalca-belediyesinde-ilkogretim-ve-ortaogretim-ogrencilerine-etkinlik-duzenledik/", permanent: true },
      { source: "/palet-tesisimiz-acildi.html", destination: "/haberler/palet-tesisimiz-acildi/", permanent: true },
      { source: "/palet-tesisimiz-acildi", destination: "/haberler/palet-tesisimiz-acildi/", permanent: true },
      { source: "/cevre-izin-ve-lisans-belgemiz-yenilendi.html", destination: "/haberler/cevre-izin-ve-lisans-belgemiz-yenilendi/", permanent: true },
      { source: "/cevre-izin-ve-lisans-belgemiz-yenilendi", destination: "/haberler/cevre-izin-ve-lisans-belgemiz-yenilendi/", permanent: true },
      { source: "/sifir-atik-kapsaminda-yaptigimiz-etkinlikler-ve-bilgilendirme-calismalari.html", destination: "/haberler/sifir-atik-kapsaminda-yaptigimiz-etkinlikler-ve-bilgilendirme-calismalari/", permanent: true },
      { source: "/sifir-atik-kapsaminda-yaptigimiz-etkinlikler-ve-bilgilendirme-calismalari", destination: "/haberler/sifir-atik-kapsaminda-yaptigimiz-etkinlikler-ve-bilgilendirme-calismalari/", permanent: true },
      { source: "/avcilarda-kumbaralara-numaralandirma-calismasi.html", destination: "/haberler/avcilarda-kumbaralara-numaralandirma-calismasi/", permanent: true },
      { source: "/avcilarda-kumbaralara-numaralandirma-calismasi", destination: "/haberler/avcilarda-kumbaralara-numaralandirma-calismasi/", permanent: true },
      { source: "/tekerlekli-sandalye-hediye-ettik.html", destination: "/haberler/tekerlekli-sandalye-hediye-ettik/", permanent: true },
      { source: "/tekerlekli-sandalye-hediye-ettik", destination: "/haberler/tekerlekli-sandalye-hediye-ettik/", permanent: true },
      { source: "/tahta-palet-alim-ve-satimina-basladik.html", destination: "/haberler/tahta-palet-alim-ve-satimina-basladik/", permanent: true },
      { source: "/tahta-palet-alim-ve-satimina-basladik", destination: "/haberler/tahta-palet-alim-ve-satimina-basladik/", permanent: true },
      { source: "/ogrencileri-tesisimizde-misafir-ettik.html", destination: "/haberler/ogrencileri-tesisimizde-misafir-ettik/", permanent: true },
      { source: "/ogrencileri-tesisimizde-misafir-ettik", destination: "/haberler/ogrencileri-tesisimizde-misafir-ettik/", permanent: true },
      { source: "/dar-sokaklar-icin-aracimiz.html", destination: "/haberler/dar-sokaklar-icin-aracimiz/", permanent: true },
      { source: "/dar-sokaklar-icin-aracimiz", destination: "/haberler/dar-sokaklar-icin-aracimiz/", permanent: true },
      { source: "/numaralandirma-calismamiz.html", destination: "/haberler/numaralandirma-calismamiz/", permanent: true },
      { source: "/numaralandirma-calismamiz", destination: "/haberler/numaralandirma-calismamiz/", permanent: true },
      { source: "/nasil-geri-donusum-yapilir.html", destination: "/haberler/nasil-geri-donusum-yapilir/", permanent: true },
      { source: "/nasil-geri-donusum-yapilir", destination: "/haberler/nasil-geri-donusum-yapilir/", permanent: true },
      { source: "/ambalaj-atiklarimi-nasil-biriktirecegim-biriktirdikten-sonra-ne-yapacagim.html", destination: "/haberler/ambalaj-atiklarimi-nasil-biriktirecegim-biriktirdikten-sonra-ne-yapacagim/", permanent: true },
      { source: "/ambalaj-atiklarimi-nasil-biriktirecegim-biriktirdikten-sonra-ne-yapacagim", destination: "/haberler/ambalaj-atiklarimi-nasil-biriktirecegim-biriktirdikten-sonra-ne-yapacagim/", permanent: true },
      { source: "/ambalaj-atiklarimi-ayri-biriktiriyorum-ancak-belediye-toplamiyor-ne-yapmaliyim.html", destination: "/haberler/ambalaj-atiklarimi-ayri-biriktiriyorum-ancak-belediye-toplamiyor-ne-yapmaliyim/", permanent: true },
      { source: "/ambalaj-atiklarimi-ayri-biriktiriyorum-ancak-belediye-toplamiyor-ne-yapmaliyim", destination: "/haberler/ambalaj-atiklarimi-ayri-biriktiriyorum-ancak-belediye-toplamiyor-ne-yapmaliyim/", permanent: true },
      { source: "/ambalaj-atiklari-nasil-geri-kazanilmaktadir-ben-evimde-geri-kazanim-uygulayabilir-miyim.html", destination: "/haberler/ambalaj-atiklari-nasil-geri-kazanilmaktadir-ben-evimde-geri-kazanim-uygulayabilir-miyim/", permanent: true },
      { source: "/ambalaj-atiklari-nasil-geri-kazanilmaktadir-ben-evimde-geri-kazanim-uygulayabilir-miyim", destination: "/haberler/ambalaj-atiklari-nasil-geri-kazanilmaktadir-ben-evimde-geri-kazanim-uygulayabilir-miyim/", permanent: true },
      { source: "/tesisimize-ziyaret-edildi.html", destination: "/haberler/tesisimize-ziyaret-edildi/", permanent: true },
      { source: "/tesisimize-ziyaret-edildi", destination: "/haberler/tesisimize-ziyaret-edildi/", permanent: true },
      { source: "/duyuru-baslik-3.html", destination: "/haberler/duyuru-baslik-3/", permanent: true },
      { source: "/duyuru-baslik-3", destination: "/haberler/duyuru-baslik-3/", permanent: true },
    ];
  },
  // Next 15 dev cross-origin uyarısı: lokal ağdan erişim kaynaklarına izin ver.
  allowedDevOrigins: ["mxlinux.local", "192.168.1.100"],
  images: {
    // Standalone modda next/image prod optimizasyonu aktiftir (sharp gerekir).
    remotePatterns: [],
  },
};

export default nextConfig;