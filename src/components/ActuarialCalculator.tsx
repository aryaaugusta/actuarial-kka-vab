import {useState} from 'react';
import {differenceInYears, format, parseISO} from 'date-fns';
import './ActuarialCalculator.css';
import {Button} from "@/components/ui/button";

type JenisKelamin = 'pria' | 'wanita';
type MetodePensiun = 'normal' | 'dipercepat';

export default function ManfaatKaryawanCalculator() {
    // Input dasar
    const [tanggalLahir, setTanggalLahir] = useState<string>('1980-01-01');
    const [tanggalMulaiKerja, setTanggalMulaiKerja] = useState<string>('2010-01-01');
    const [tanggalValuasi, setTanggalValuasi] = useState<string>(format(new Date(), 'yyyy-MM-dd'));
    const [usiaPensiun, setUsiaPensiun] = useState<string>('58');
    const [jenisKelamin, setJenisKelamin] = useState<JenisKelamin>('pria');
    const [gajiSekarang, setGajiSekarang] = useState<string>('10000000');
    const [metodePensiun, setMetodePensiun] = useState<MetodePensiun>('normal');
    const [tingkatInflasi, setTingkatInflasi] = useState<string>('0.05'); // 5% default
    const [tingkatDiskonto, setTingkatDiskonto] = useState<string>('0.08'); // 8% default

    // Hasil perhitungan
    const [hasil, setHasil] = useState<{
        tglValuasi: string;
        usiaSekarang: number;
        masaKerja: number;
        sisaMasaKerja: number;
        gajiProyeksi: number;
        manfaatPensiunTahunan: number;
        nilaiKiniKewajiban: number;
        akumulasiManfaat: number;
        /*manfaatJHT: number;*/
        nilaiKiniPensiun: number;
        nilaiKiniMeninggal: number;
        nilaiKiniCacat: number;
        nilaiKiniTotal: number;
        pesangon: number;
        detailProyeksi: Array<{
            tahun: number;
            usia: number;
            gaji: number;
            akumulasiManfaat: number;
            diskonto: number;
        }>;
    } | null>(null);

    const hitungManfaat = () => {
        try {
            const tglLahir = parseISO(tanggalLahir);
            const tglMulaiKerja = parseISO(tanggalMulaiKerja);
            const tglValuasi = parseISO(tanggalValuasi);
            const usiaPensiunNum = parseInt(usiaPensiun);
            const inflasi = parseFloat(tingkatInflasi);
            const diskonto = parseFloat(tingkatDiskonto);
            const gaji = parseFloat(gajiSekarang);

            const probMeninggal = 0.001; // 0.1%
            const probCacat = 0.002; // 0.2%

            let nilaiKiniPensiun = 0;
            let nilaiKiniMeninggal = 0;
            let nilaiKiniCacat = 0;

            // Hitung usia dan masa kerja
            const usiaSekarang = differenceInYears(tglValuasi, tglLahir);
            const masaKerja = differenceInYears(tglValuasi, tglMulaiKerja);
            const sisaMasaKerja = Math.max(usiaPensiunNum - usiaSekarang, 0);

            // Proyeksi gaji dengan inflasi
            const detailProyeksi = [];
            let akumulasiManfaat = 0;
            let gajiProyeksi = gaji;
            let manfaatTotal = 0;

            for (let tahun = 0; tahun <= sisaMasaKerja; tahun++) {
                const usiaTahunIni = usiaSekarang + tahun;

                // Hitung proyeksi gaji dengan inflasi
                if (tahun > 0) {
                    gajiProyeksi *= (1 + inflasi);
                }

                // Hitung akumulasi manfaat (2% per tahun masa kerja berdasarkan gaji terakhir)
                if (usiaTahunIni < usiaPensiunNum) {
                    akumulasiManfaat += 0.02 * gajiProyeksi;
                }

                // Hitung nilai kini manfaat
                const diskontoTahunIni = Math.pow(1 + diskonto, sisaMasaKerja - tahun);

                detailProyeksi.push({
                    tahun: tahun + 1,
                    usia: usiaTahunIni,
                    gaji: gajiProyeksi,
                    akumulasiManfaat: akumulasiManfaat,
                    diskonto: diskontoTahunIni
                });

                if (usiaTahunIni === usiaPensiunNum) {
                    manfaatTotal = akumulasiManfaat / diskontoTahunIni;
                }

                /*// Nilai Kini Pensiun
                if (usiaTahunIni === usiaPensiun) {
                    // Diberikan selama 20 tahun pensiun
                    const annuity = (1 - Math.pow(1 + diskonto, -20)) / diskonto;
                    nilaiKiniPensiun = akumulasiManfaat * annuity / diskontoTahunIni;
                }*/

                // Nilai Kini Pensiun
                // Diberikan selama 20 tahun pensiun
                const annuity = (1 - Math.pow(1 + diskonto, -20)) / diskonto;
                nilaiKiniPensiun = akumulasiManfaat * annuity / diskontoTahunIni;

                // Nilai Kini Meninggal
                nilaiKiniMeninggal += probMeninggal * (gajiProyeksi * sisaMasaKerja) / diskontoTahunIni;

                // Nilai Kini Cacat
                nilaiKiniCacat += probCacat * (0.8 * gajiProyeksi * sisaMasaKerja) / diskontoTahunIni;
            }

            // Hitung manfaat pensiun tahunan (2% x masa kerja x gaji proyeksi terakhir)
            const manfaatPensiunTahunan = 0.02 * (masaKerja + sisaMasaKerja) * gajiProyeksi;

            // Hitung nilai kini kewajiban (Present Value of Defined Benefit Obligation)
            const nilaiKiniKewajiban = manfaatPensiunTahunan * (1 - Math.pow(1 + diskonto, -20)) / diskonto;

            // Hitung manfaat JHT (sesuai UUCK)
            /*const manfaatJHT = metodePensiun === 'normal'
                ? (masaKerja + sisaMasaKerja) * 0.1 * gajiProyeksi
                : (masaKerja + sisaMasaKerja) * 0.08 * gajiProyeksi;*/

            const nilaiKiniTotal = nilaiKiniPensiun + nilaiKiniMeninggal + nilaiKiniCacat;

            // === Pesangon Berdasarkan Pasal 35 UU 13/2003 ===
            let pesangon = 0;
            if (masaKerja < 1) {
                pesangon = gaji;
            } else if (masaKerja < 2) {
                pesangon = 2 * gaji;
            } else if (masaKerja < 3) {
                pesangon = 3 * gaji;
            } else if (masaKerja < 4) {
                pesangon = 4 * gaji;
            } else if (masaKerja < 5) {
                pesangon = 5 * gaji;
            } else if (masaKerja < 6) {
                pesangon = 6 * gaji;
            } else if (masaKerja < 7) {
                pesangon = 7 * gaji;
            } else if (masaKerja < 8) {
                pesangon = 8 * gaji;
            } else {
                pesangon = 9 * gaji;
            }

            setHasil({
                tglValuasi: format(tglValuasi, 'dd /MM/yyyy'),
                usiaSekarang,
                masaKerja,
                sisaMasaKerja,
                gajiProyeksi,
                manfaatPensiunTahunan,
                nilaiKiniKewajiban,
                akumulasiManfaat,
                /*manfaatJHT,*/
                detailProyeksi,
                nilaiKiniPensiun,
                nilaiKiniMeninggal,
                nilaiKiniCacat,
                nilaiKiniTotal,
                pesangon
            });
        } catch (error) {
            alert('Terjadi kesalahan dalam perhitungan. Harap periksa input Anda.');
            console.error(error);
        }
    };

    const resetForm = () => {
        setTanggalLahir('1980-01-01');
        setTanggalMulaiKerja('2010-01-01');
        setTanggalValuasi(format(new Date(), 'yyyy-MM-dd'));
        setUsiaPensiun('58');
        setJenisKelamin('pria');
        setGajiSekarang('10000000');
        setMetodePensiun('normal');
        setTingkatInflasi('0.05');
        setTingkatDiskonto('0.08');
        setHasil(null);
    };

    const formatRupiah = (angka: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0
        }).format(angka);
    };

    return (
        <div className="manfaat-karyawan-container h1">
            <h1>Kalkulator Manfaat Karyawan (PSAK 24)</h1>

            <div className="input-section">
                <div className="input-group">
                    <label>Tanggal Lahir:</label>
                    <input
                        type="date"
                        value={tanggalLahir}
                        onChange={(e) => setTanggalLahir(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Tanggal Mulai Kerja:</label>
                    <input
                        type="date"
                        value={tanggalMulaiKerja}
                        onChange={(e) => setTanggalMulaiKerja(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Tanggal Valuasi:</label>
                    <input
                        type="date"
                        value={tanggalValuasi}
                        onChange={(e) => setTanggalValuasi(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Usia Pensiun Normal:</label>
                    <input
                        type="number"
                        value={usiaPensiun}
                        onChange={(e) => setUsiaPensiun(e.target.value)}
                        min="50"
                        max="65"
                    />
                </div>

                <div className="input-group">
                    <label>Jenis Kelamin:</label>
                    <select
                        value={jenisKelamin}
                        onChange={(e) => setJenisKelamin(e.target.value as JenisKelamin)}
                    >
                        <option value="pria">Pria</option>
                        <option value="wanita">Wanita</option>
                    </select>
                </div>

                <div className="input-group">
                    <label>Gaji Sekarang (per bulan):</label>
                    <input
                        type="number"
                        value={gajiSekarang}
                        onChange={(e) => setGajiSekarang(e.target.value)}
                        min="0"
                    />
                </div>

                {/*<div className="input-group">
                    <label>Metode Pensiun:</label>
                    <select
                        value={metodePensiun}
                        onChange={(e) => setMetodePensiun(e.target.value as MetodePensiun)}
                    >
                        <option value="normal">Normal</option>
                        <option value="dipercepat">Dipercepat</option>
                    </select>
                </div>*/}

                <div className="input-group">
                    <label>Tingkat Inflasi (BI):</label>
                    <input
                        type="number"
                        value={tingkatInflasi}
                        onChange={(e) => setTingkatInflasi(e.target.value)}
                        step="0.01"
                        min="0"
                        max="1"
                    />
                </div>

                <div className="input-group">
                    <label>Tingkat Diskonto:</label>
                    <input
                        type="number"
                        value={tingkatDiskonto}
                        onChange={(e) => setTingkatDiskonto(e.target.value)}
                        step="0.01"
                        min="0"
                        max="1"
                    />
                </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4 animate-fade-in flex justify-center"
                 style={{animationDelay: "0.4s"}}>
                <Button variant="outline"
                        className="border-navy-600 text-navy-600 hover:bg-navy-50 dark:border-white dark:text-white dark:hover:bg-navy-700 px-8 py-6 text-lg"
                        onClick={hitungManfaat}>Hitung</Button>
                <Button variant="outline"
                        className="border-navy-600 text-navy-600 hover:bg-navy-50 dark:border-white dark:text-white dark:hover:bg-navy-700 px-8 py-6 text-lg"
                        onClick={resetForm}>Reset</Button>
            </div>

            {hasil && (
                <div className="result-section">
                    <h2>Hasil Perhitungan Manfaat Karyawan</h2>

                    <div className="result-grid">
                        <div className="result-item highlight">
                            <span>Tanggal Valuasi:</span>
                            <strong>{hasil.tglValuasi}</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Usia pada Tanggal Valuasi:</span>
                            <strong>{hasil.usiaSekarang} tahun</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Masa Kerja pada Tanggal Valuasi:</span>
                            <strong>{hasil.masaKerja} tahun</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Sisa Masa Kerja hingga Pensiun:</span>
                            <strong>{hasil.sisaMasaKerja} tahun</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Proyeksi Gaji saat Pensiun:</span>
                            <strong>{formatRupiah(hasil.gajiProyeksi)}/bulan</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Manfaat Pensiun Tahunan:</span>
                            <strong>{formatRupiah(hasil.manfaatPensiunTahunan)}/tahun</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Nilai Kini Kewajiban Perusahaan:</span>
                            <strong>{formatRupiah(hasil.nilaiKiniKewajiban)}</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Akumulasi Manfaat:</span>
                            <strong>{formatRupiah(hasil.akumulasiManfaat)}/tahun</strong>
                        </div>
                        {/*<div className="result-item highlight">
                            <span>Manfaat JHT (UUCK):</span>
                            <strong>{formatRupiah(hasil.manfaatJHT)}</strong>
                        </div>*/}
                        <div className="result-item highlight">
                            <span>Nilai Kini - Pensiun:</span>
                            <strong>{formatRupiah(hasil.nilaiKiniPensiun)}</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Nilai Kini - Meninggal Dunia:</span>
                            <strong>{formatRupiah(hasil.nilaiKiniMeninggal)}</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Nilai Kini - Cacat Tetap:</span>
                            <strong>{formatRupiah(hasil.nilaiKiniCacat)}</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Total Nilai Kini Kewajiban:</span>
                            <strong>{formatRupiah(hasil.nilaiKiniTotal)}</strong>
                        </div>
                        <div className="result-item highlight">
                            <span>Pesangon (UU 13/2003):</span>
                            <strong>{formatRupiah(hasil.pesangon)}</strong>
                        </div>
                    </div>

                    <div className="proyeksi-table th">
                        <h3>Detail Proyeksi Manfaat</h3>
                        <table>
                            <thead>
                            <tr>
                                <th>Tahun</th>
                                <th>Usia</th>
                                <th>Gaji Proyeksi</th>
                                <th>Akumulasi Manfaat</th>
                                <th>Faktor Diskonto</th>
                            </tr>
                            </thead>
                            <tbody>
                            {hasil.detailProyeksi.map((proyeksi, index) => (
                                <tr key={index}>
                                    <td align={"center"}>{proyeksi.tahun}</td>
                                    <td align={"center"}>{proyeksi.usia}</td>
                                    <td align={"center"}>{formatRupiah(proyeksi.gaji)}</td>
                                    <td align={"center"}>{formatRupiah(proyeksi.akumulasiManfaat)}</td>
                                    <td align={"center"}>{proyeksi.diskonto.toFixed(4)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="disclaimer">
                        <h3>Catatan:</h3>u
                        <ul>
                            <li>Perhitungan mengacu pada PSAK 24 (Manfaat Karyawan)</li>
                            <li>Asumsi manfaat pensiun: 2% per tahun masa kerja dari gaji terakhir</li>
                            {/*<li>Manfaat JHT dihitung berdasarkan ketentuan UU Cipta Kerja</li>*/}
                            <li>Proyeksi gaji menggunakan tingkat inflasi Bank Indonesia</li>
                            <li>Nilai kini kewajiban dihitung dengan metode projected unit credit</li>
                            <li>Hasil perhitungan adalah estimasi aktuarial dan dapat berbeda dengan realitas</li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}