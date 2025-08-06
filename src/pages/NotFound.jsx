import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  return (
    <section className="h-[70vh] flex flex-col justify-center items-center text-center">
      <h1 className="text-4xl font-bold mb-4">{t('notfound.title')}</h1>
      <p>{t('notfound.desc')}</p>
    </section>
  );
}
