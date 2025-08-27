import { useTranslation } from "react-i18next";

export default function Branding() {
  const { t } = useTranslation();
  return (
    <section className="py-20 px-6 text-center">
      <h1 className="text-3xl font-bold mb-6 text-primary">{t('branding.title')}</h1>
      <p>{t('branding.desc')}</p>
      {/* Puedes agregar secciones de identidad gráfica, paleta, logotipos, etc */}
    </section>
  );
}
