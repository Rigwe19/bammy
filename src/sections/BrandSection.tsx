interface Brand {
    name: string;
    logo: string;
}
const brands:Brand[] = [
  { name: "FilmOne Entertainment", logo: "/images/brands/filmone.webp" },
  { name: "LG", logo: "/images/brands/lg.png" },
  { name: "Cosmo Cosmetics", logo: "/images/brands/cosmo.png" },
  { name: "Coca-Cola", logo: "/images/brands/coke.png" },
  { name: "AMVCA", logo: "/images/brands/amvca.png" },
  { name: "Addmie", logo: "/images/brands/addmie.png" },
  { name: "BuchyMix", logo: "/images/brands/buchymix.png" },
  { name: "Kellogg's", logo: "/images/brands/kellog.png" },
  { name: "Kesartem", logo: "/images/brands/kesartem.png" },
  { name: "Drevnii Monah", logo: "/images/brands/drevnii.jpeg" },
  { name: "TAFTA", logo: "/images/brands/tafta.jpeg" },
  { name: "Gino", logo: "/images/brands/gino.jpeg" },
  { name: "Martell", logo: "/images/brands/martell.png" },
  { name: "Onga", logo: "/images/brands/onga.png" },
  { name: "Oppo", logo: "/images/brands/oppo.png" },
  { name: "The Headies", logo: "/images/brands/headies.png" },
  { name: "Blaaiz", logo: "/images/brands/blaaiz.gif" },
  { name: "Maggi", logo: "/images/brands/maggi.png" },
  { name: "Nestlé Cerelac", logo: "/images/brands/cerelac.png" },
  { name: "Indomie", logo: "/images/brands/indomie.png" },
  { name: "itel", logo: "/images/brands/itel.jpeg" },
  { name: "Peak", logo: "/images/brands/peak.png" },
  { name: "Fayrouz", logo: "/images/brands/fayrouz.webp" },
  { name: "Colgate", logo: "/images/brands/colgate.png" },
  { name: "Checkers Custard", logo: "/images/brands/checkers.png" },
  { name: "Durex", logo: "/images/brands/durex.png" },
  { name: "Jumia", logo: "/images/brands/jumia.png" },
  { name: "Pepsodent", logo: "/images/brands/pepsoden.png" },
  { name: "Opera Mini", logo: "/images/brands/opera.png" },
  { name: "Bic", logo: "/images/brands/bic.png" },
  { name: "Three Crown", logo: "/images/brands/crown.jpeg" },
];

const chunkArray = <T,>(array: T[], size: number): T[][] => {
  const chunkedArr: T[][] = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

export default function BrandShowcase() {
  const brandRows = chunkArray(brands, 3);

  return (
    <div data-scroll-to="brands" className="relative bg-gradient-to-b from-silver/40 via-primary/90 to-primary/60 md:py-24 py-12 px-4 overflow-hidden w-full p-4 md:p-20">
      <div className="max-w-7xl mx-auto">
        <i className="text-center text-3xl md:text-4xl font-bold text-white mb-8">Brands I<span className="font-dm-sans">'</span>ve Worked With</i>
        <div className="card-glass rounded-xl p-2 md:p-6">
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-300">
              <thead className="text-xs text-white uppercase bg-white/5">
                <tr>
                  <th scope="col" className="px-4 py-3">Brand</th>
                  <th scope="col" className="px-4 py-3">Brand</th>
                  <th scope="col" className="px-4 py-3">Brand</th>
                </tr>
              </thead>
              <tbody>
                {brandRows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="border-b text-white border-gray-700/50 even:bg-white/5">
                    {row.map((brand) => (
                      <td key={brand.name} className="px-4 py-4">
                        <div className="flex flex-col items-center gap-2">
                          <img src={brand.logo} alt={`${brand.name} logo`} className="h-16 aspect-video object-contain" />
                          <span className="font-medium text-center">{brand.name}</span>
                        </div>
                      </td>
                    ))}
                    {/* Fill empty cells if the last row is not full */}
                    {Array(3 - row.length).fill(null).map((_, i) => <td key={`empty-${i}`} />)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}