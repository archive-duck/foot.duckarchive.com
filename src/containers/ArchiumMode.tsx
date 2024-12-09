import { CardBody } from "@chakra-ui/react";
import Step1Img from "../assets/archium-1.png";
import Guide from "../components/Guide";

interface ArchiumModeProps extends ModeProps {
  // more
}

const ArchiumMode: React.FC<ArchiumModeProps> = ({ tabURL }) => {
  const isFileViewerPath = tabURL.match(/.*\/file-viewer\/\d+.*/);
  return (
    <>
      {isFileViewerPath ? (
        <CardBody>
          <Guide
            items={[
              {
                title: "Прилетіли",
                description:
                  "Ми на місці. На лівій панелі, знайдіть кнопку 'Завантажити всі скани'.",
                image: Step1Img,
              },
              {
                title: "Кач/ка/ємо",
                description:
                  "По натисканню на кнопку миттєво розпочнеться завантаження всіх сканів цієї справи у вашу папку 'Завантаження'.",
              },
            ]}
          />
        </CardBody>
      ) : (
        <CardBody>
          <Guide
            items={[
              {
                title: "Майже прилетіли",
                description:
                  "Впевнено можу сказати, що ми вже вміємо завантажувати скани з цього сайту, залишилось тільки їх знайти. Перейдіть на сторінку перегляду архівної справи, наприклад: http://archium.krop.archives.gov.ua/file-viewer/4370"
              },
            ]}
          />
        </CardBody>
      )}
    </>
  );
};

export default ArchiumMode;
