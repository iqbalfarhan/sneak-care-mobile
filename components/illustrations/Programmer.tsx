import { useColor } from "@/hooks/useColor";
import { FC } from "react";
import Svg, {
  Circle,
  Ellipse,
  G,
  Path,
  Rect,
  SvgProps,
} from "react-native-svg";

type SvgProgrammerProps = SvgProps & {
  size: number;
};

const Programmer: FC<SvgProgrammerProps> = ({ size = 300, ...props }) => {
  const { color } = useColor();
  const { bg } = color.primary;
  const { bg: card } = color.card;
  const { bg: input } = color.input;
  return (
    <Svg width={size} height={size} viewBox="0 0 720 719.998" {...props}>
      <G data-name="Group 67" transform="translate(-670.999 -251)">
        <Path
          data-name="Path 1041"
          d="M1031 521a358.581 358.581 0 01-84.818 232.118 312.52 312.52 0 01-6.091 7.013 361.981 361.981 0 01-84.07 69.745q-10.8 6.484-22.073 12.22c-.76.386-1.532.772-2.292 1.146-.909.461-1.831.909-2.753 1.358a356.461 356.461 0 01-59.194 22.7q-3.177.9-6.365 1.744a359.482 359.482 0 01-82.015 11.821c-1.445.037-2.865.062-4.235.087a53.54 53.54 0 01-1.433.025c-1.557.012-3.1.025-4.659.025a360.337 360.337 0 01-86.624-10.5q-4.26-1.047-8.483-2.205a355.62 355.62 0 01-43.561-14.985q-11.211-4.671-22.024-10.078c-1.632-.822-3.264-1.644-4.871-2.491-.685-.336-1.358-.7-2.03-1.046a361.811 361.811 0 01-101.709-79.8 348.56 348.56 0 01-5.88-6.776 360.031 360.031 0 0161.773-522.061c2.043-1.507 4.1-3 6.179-4.46l1.233-.859a357.2 357.2 0 01120.955-54.623c2.466-.61 4.933-1.183 7.424-1.719a363.484 363.484 0 01142.854-2.5c2.479.461 4.958.934 7.424 1.445a357.857 357.857 0 01120.955 49.117c.822.523 1.644 1.046 2.466 1.594a257.855 257.855 0 014.945 3.276A359.607 359.607 0 011031 521z"
          transform="translate(360 90)"
          fill={card}
        />
        <Path
          data-name="Path 1042"
          d="M549.936 702.564l-115.063 10.215-1.233.112V221.922l1.233-.859a359.155 359.155 0 0177.244-41.032L518 261.123l.536 7.424 5.817 80.421 1.794 24.739L549.724 699.7z"
          transform="translate(390.13 94.675)"
          fill={input}
        />
        <Path
          data-name="Path 1043"
          d="M777.877 213.557c.822.523 1.644 1.046 2.466 1.594V713.67l-2.466-.224-113.817-10.1.212-2.865 23.581-325.992 1.794-24.739 5.817-80.421.536-7.429 6.166-85.042a358.362 358.362 0 0175.712 36.7z"
          transform="translate(446.738 93.896)"
          fill={input}
        />
        <Path
          data-name="Path 1044"
          d="M835.7 206.32v506.913c0 9.729-6.7 17.639-14.948 17.639H451.04c-6.826 0-12.619-5.431-14.375-12.843a20.064 20.064 0 01-.573-4.8V214.6l-1.233.859a307.231 307.231 0 00-6.179 4.46v493.314a28.549 28.549 0 007.7 19.931 21.252 21.252 0 009.691 5.8 18.83 18.83 0 004.97.66h369.715a19 19 0 004.983-.66c9.94-2.678 17.377-13.192 17.377-25.736V211.191a287.712 287.712 0 00-4.945-3.276 122.846 122.846 0 00-2.471-1.595z"
          transform="translate(388.911 101.134)"
          fill={input}
        />
        <Path
          data-name="Rectangle 265"
          transform="translate(821.298 355.803)"
          fill={input}
          d="M0 0H407.026V7.423H0z"
        />
        <Path
          data-name="Path 1045"
          d="M531.73 169.459c2.466-.61 4.933-1.183 7.424-1.719V369.3h-7.424z"
          transform="translate(414.228 91.656)"
          fill={input}
        />
        <Path
          data-name="Path 1046"
          d="M652.37 165.73c2.479.461 4.958.934 7.424 1.445V369.8h-7.424z"
          transform="translate(443.866 91.162)"
          fill={input}
        />
        <Path
          data-name="Path 1047"
          d="M898.373 597.21H410.929a33.409 33.409 0 000 66.818h487.444a33.338 33.338 0 0025.068-11.353 33.758 33.758 0 003.757-5.2 31.822 31.822 0 002.18-4.434 33.388 33.388 0 00-31-45.828z"
          transform="translate(376.343 197.164)"
          fill={input}
        />
        <Path
          data-name="Rectangle 266"
          transform="translate(823.772 443.642)"
          fill={input}
          d="M0 0H404.552V24.743H0z"
        />
        <Path
          data-name="Path 1048"
          d="M284.729 148.69h7.423a13.609 13.609 0 0113.609 13.61H271.12a13.609 13.609 0 0113.609-13.609z"
          transform="translate(737.607 287.529)"
          fill={input}
        />
        <Path
          data-name="Path 1049"
          d="M929.452 636.34a359.994 359.994 0 01-35.028 36.06H414.118a360 360 0 01-35.028-36.06z"
          transform="translate(376.729 206.777)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1050"
          d="M649.079 536.07H568.21a3.957 3.957 0 00-1.283.2 4.3 4.3 0 00-3.027 4.111v127.755h89.5V540.38a4.314 4.314 0 00-4.322-4.31zm-30.606 63.03a9.381 9.381 0 01-1.943 5.73 9.548 9.548 0 01-17.165-5.73v-14.823a9.554 9.554 0 1119.109 0z"
          transform="translate(422.131 182.144)"
          fill="#2f2e41"
        />
        <Path
          data-name="Path 1051"
          d="M563.68 638.81v12.32a2.416 2.416 0 002.4 2.417h85.241a2.424 2.424 0 002.4-2.417v-12.32z"
          transform="translate(422.077 207.384)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1052"
          d="M810.165 376.02H464.491a11.225 11.225 0 00-11.211 11.2v233.263a11.22 11.22 0 0011.211 11.211h345.674a11.22 11.22 0 0011.211-11.211V387.219a11.225 11.225 0 00-11.211-11.199z"
          transform="translate(394.955 142.824)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1053"
          d="M805.678 382.52H465.772a6 6 0 00-5.992 6v227.489a6 6 0 005.992 5.991h339.906a6 6 0 005.992-5.992V388.524a6 6 0 00-5.991-6z"
          transform="translate(396.552 144.421)"
          fill={bg}
        />
        <Path
          data-name="Path 1054"
          d="M728.575 654l-3.139-14.911a3.728 3.728 0 00-2.317-2.7 3.6 3.6 0 00-1.32-.249H525.842a3.6 3.6 0 00-1.32.249 3.728 3.728 0 00-2.317 2.7L519.066 654a3.721 3.721 0 003.637 4.484h202.222a3.673 3.673 0 002.89-1.383 3.718 3.718 0 00.76-3.1z"
          transform="translate(411.097 206.728)"
          fill="#2f2e41"
        />
        <Rect
          data-name="Rectangle 267"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(938.376 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 268"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(950.832 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 269"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(963.289 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 270"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(975.746 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 271"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(988.202 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 272"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1000.659 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 273"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1013.116 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 274"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1025.573 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 275"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1038.029 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 276"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1050.486 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 277"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1062.943 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 278"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1075.399 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 279"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1087.856 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 280"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1100.313 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 281"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1112.77 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 282"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1125.226 845.554)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 283"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(938.228 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 284"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(950.685 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 285"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(963.142 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 286"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(975.599 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 287"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(988.055 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 288"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1000.512 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 289"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1012.969 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 290"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1025.425 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 291"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1037.882 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 292"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1050.339 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 293"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1062.795 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 294"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1075.252 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 295"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1087.709 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 296"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1100.166 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 297"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1112.622 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 298"
          width={6.228}
          height={3.737}
          rx={0.488}
          transform="translate(1125.079 851.782)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 299"
          width={49.827}
          height={3.737}
          rx={0.488}
          transform="translate(998.021 859.256)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1055"
          d="M786.723 408.176H468.674a1.265 1.265 0 110-2.53h318.049a1.265 1.265 0 110 2.53z"
          transform="translate(398.426 150.102)"
          fill="#3f3d56"
        />
        <Ellipse
          data-name="Ellipse 180"
          cx={7.412}
          cy={7.577}
          rx={7.412}
          ry={7.577}
          transform="translate(881.338 534.136)"
          fill="#3f3d56"
        />
        <Ellipse
          data-name="Ellipse 181"
          cx={7.412}
          cy={7.577}
          rx={7.412}
          ry={7.577}
          transform="translate(906.944 534.136)"
          fill="#3f3d56"
        />
        <Ellipse
          data-name="Ellipse 182"
          cx={7.412}
          cy={7.577}
          rx={7.412}
          ry={7.577}
          transform="translate(932.55 534.136)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1056"
          d="M715.222 389.8h-18.187a1.377 1.377 0 000 2.753h18.187a1.377 1.377 0 100-2.753z"
          transform="translate(454.508 146.21)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1057"
          d="M715.222 393.95h-18.187a1.377 1.377 0 000 2.753h18.187a1.376 1.376 0 100-2.753z"
          transform="translate(454.508 147.229)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1058"
          d="M715.222 398.1h-18.187a1.377 1.377 0 000 2.753h18.187a1.377 1.377 0 100-2.753z"
          transform="translate(454.508 148.249)"
          fill="#3f3d56"
        />
        <Rect
          data-name="Rectangle 300"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(884.402 587.672)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 301"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(959.142 587.672)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 302"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(980.318 587.672)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 303"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(904.732 587.073)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 304"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(1004.385 587.073)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 305"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(904.332 603.866)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 306"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(979.073 603.866)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 307"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1000.249 603.866)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 308"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(924.662 603.267)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 309"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(1024.316 603.267)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 310"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(924.263 620.059)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 311"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(999.003 620.059)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 312"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1020.18 620.059)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 313"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(944.593 619.461)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 314"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(1044.247 619.461)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 315"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(944.194 636.253)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 316"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1018.934 636.253)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 317"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1040.111 636.253)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 318"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(964.524 635.655)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 319"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(959.142 700.646)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 320"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(980.318 700.646)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 321"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(1004.385 701.244)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 322"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(884.402 700.646)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 323"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(904.732 701.244)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 324"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(904.332 684.452)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 325"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(979.073 684.452)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 326"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1000.249 684.452)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 327"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(924.662 685.05)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 328"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(924.263 668.258)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 329"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(999.003 668.258)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 330"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1020.18 668.258)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 331"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(944.593 668.856)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 332"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(944.194 652.065)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 333"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1018.934 652.065)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 334"
          width={13.71}
          height={7.175}
          rx={2.88}
          transform="translate(1040.111 652.065)"
          fill="#e6e6e6"
        />
        <Rect
          data-name="Rectangle 335"
          width={47.791}
          height={7.175}
          rx={2.88}
          transform="translate(964.524 652.663)"
          fill="#e6e6e6"
        />
        <Path
          data-name="Path 223"
          d="M304.558 542.57s20.613 28.936 13.251 36.771 55.23 8.03 55.23 8.03-9.4-42.094-6.635-51.781z"
          transform="translate(699.068 125.378)"
          fill="#ffb9b9"
        />
        <Path
          data-name="Path 1059"
          d="M789.655 757.108c-.76.386-1.532.772-2.292 1.146-19.682 9.841-35.427 15.434-56.964 21.563-1.819-20.3-3.575-55.993-5.282-78.116-.448-5.742-.9-10.563-1.333-13.964a18.912 18.912 0 00-1.1-5.294l.075 5.294.187 13.964 1.084 79.86a359.487 359.487 0 01-82.015 11.821c-1.445.037-2.865.062-4.235.087-.486.012-.959.025-1.433.025-1.557.013-3.1.025-4.659.025a360.338 360.338 0 01-86.624-10.5c.61-20.093 1.221-55.383 1.806-81.318.125-5.07.237-9.791.361-13.964.237-8.919.486-15.347.723-17.5a5.432 5.432 0 00-.486 1.208 121.028 121.028 0 00-2.354 16.293 782.017 782.017 0 00-1.308 13.964c-2.317 26.944-4.733 63.579-7.225 79.113a355.621 355.621 0 01-43.561-14.985q-11.208-4.673-22.02-10.079c1.37-8.969 2.8-19.021 4.273-29.448a4590.777 4590.777 0 013.538-24.6c1.868-12.681 3.787-25.113 5.73-36.062 2.84-15.994 5.755-28.85 8.645-34.754a1880.675 1880.675 0 018.134-16.43c.922-1.856 1.844-3.687 2.741-5.468.212-.424.424-.835.635-1.246a1115.6 1115.6 0 015.506-10.7 634.74 634.74 0 014.3-8.1c3.289-6.079 6.079-10.925 8.147-13.989a68.831 68.831 0 0136.473-27.666l.374-.1.262.112 25.474-7.823 3.725-1.146 2.5-.772 8.819-6.714 4.8-3.65 4.5-3.426 8.794-6.689 54.448 3.351 10.6 25.524 23.742 8.682.411-.187.361-.149.374.1a68.893 68.893 0 0136.473 27.666c1.171 1.756 2.591 4.073 4.2 6.876a333.846 333.846 0 014.484 8.1c2.3 4.273 4.821 9.093 7.487 14.313.585 1.146 1.183 2.317 1.781 3.5q1.663 3.288 3.376 6.714a1707.675 1707.675 0 018.134 16.443c2.379 4.871 4.783 14.886 7.15 27.629 1.956 10.588 3.9 23.07 5.78 36.062 2.466 16.842-.162 37.009 2.068 52.505.13.981.279 1.94.416 2.899z"
          transform="translate(399.308 177.479)"
          fill="#3f3d56"
        />
        <Circle
          data-name="Ellipse 183"
          cx={63.326}
          cy={63.326}
          r={63.326}
          transform="translate(968.44 547.534)"
          fill="#ffb9b9"
        />
        <Path
          data-name="Path 1060"
          d="M719.446 386.358a33.145 33.145 0 00-4.945-8.1c-9.617-11.747-27.106-16.916-45.056-3.015a19.032 19.032 0 00-10.4.6 16.08 16.08 0 00-4.385 2.417 19.894 19.894 0 00-6.154 8.1 19.335 19.335 0 00-1.37 5.269 62.987 62.987 0 00-13.989-5.269 75.163 75.163 0 00-36.286 0 45.522 45.522 0 00-10.937 4.335c-5.83 3.363-9.181 7.611-9.779 12.332-8.408.473-17.153 4.9-23.668 12.145a37.106 37.106 0 00-2.105 2.529A40.745 40.745 0 00542 442.675v1.582h1.582a33.472 33.472 0 0112.644 2.466 34.361 34.361 0 017.337 4.048 35.816 35.816 0 014.2 3.488 41.71 41.71 0 017.624 10.028 46.663 46.663 0 015.082 30.781 45.1 45.1 0 01-1.893 7.175 46.816 46.816 0 01-4.622 9.5c-.075.112-.137.224-.212.336a78.043 78.043 0 00-2.379 4.061 51.839 51.839 0 00-1.57 3.114 64.732 64.732 0 00-3.587 9.019 66.749 66.749 0 00-3.04 16.866 50.61 50.61 0 00-.062 4.559 64.74 64.74 0 001.283 11.66l.336 1.557.909 3.974 2.155 9.48 1.495 6.527 1.383 6.054 2.043-2.927c.7-1 2.454-4.061 4.808-8.4 1.557-2.828 3.363-6.2 5.319-9.891a1274.96 1274.96 0 0012.133-23.605c2.143-4.3 4.161-8.446 5.892-12.133 1.594-3.4 2.952-6.415 3.961-8.832.311 1.582.573 3.189.772 4.808.224 1.644.386 3.313.473 4.983.025.249.037.511.05.76l.05 1.022.012.3 1.32.174a115.869 115.869 0 0022.92.174h.012a93.25 93.25 0 0029.348-7.113 61.357 61.357 0 0014.7-9.019 51.437 51.437 0 005.8-5.63c.448-.511.884-1.021 1.308-1.545a51.227 51.227 0 006.291-9.841 52.062 52.062 0 002.915-7.175c4.783-14.487 4.509-32.562-.822-54.037a12.363 12.363 0 004.073-1.57c3.911-2.354 6.627-7.026 7.474-12.731l1.345.361a37.5 37.5 0 0012.469-9.392 30.043 30.043 0 001.918-2.529c6.096-8.962 6.146-19.723 2.197-28.804z"
          transform="translate(416.751 140.583)"
          fill="#090814"
        />
        <Path
          data-name="Path 1061"
          d="M206.32 483.352L216.9 442.5l9.346 35.247z"
          transform="translate(721.688 359.711)"
          opacity={0.2}
        />
        <Path
          data-name="Path 1062"
          d="M813.893 616.764c-3.787 52.169.137 75.139-20.765 118.152a356.456 356.456 0 01-59.194 22.7q-3.177.9-6.365 1.744a359.48 359.48 0 01-82.015 11.822c-1.445.037-2.865.062-4.235.087a53.54 53.54 0 01-1.433.025c-1.557.012-3.1.025-4.659.025a360.338 360.338 0 01-86.624-10.5q-4.26-1.047-8.483-2.205a355.631 355.631 0 01-43.561-14.985q-11.211-4.671-22.024-10.078c-1.632-.822-3.264-1.644-4.871-2.491-8.259-14.524-12.955-32.188-13.055-53.414 5.719-36.579 344.653-92.422 357.284-60.882z"
          transform="translate(395.773 199.683)"
          fill="#090814"
        />
        <Path
          data-name="Path 1063"
          d="M813.755 625.916c.193-3.23.41-6.566.662-10.04-12.631-31.54-351.566 24.3-357.284 60.876.016 3.353.159 6.607.4 9.784 13.847-36.097 335.84-89.172 356.222-60.62z"
          transform="translate(395.902 199.465)"
          opacity={0.2}
        />
        <Path
          data-name="Path 1064"
          d="M489.077 504.829a7.928 7.928 0 00-8.412-8.49 7.3 7.3 0 00-1.252.157l-49.53 11.189a8.156 8.156 0 00-5.243 4.03 10.193 10.193 0 00-2.152.313 12.035 12.035 0 105.322 23.472 12.2 12.2 0 004.851-2.347l16.784 47.262a7.883 7.883 0 008.646 3.795l32.2-7.277a7.992 7.992 0 006.142-7.12zm-62.011 27.308a8.608 8.608 0 01-3.834-16.784c.156-.039.313 0 .47-.039a8.105 8.105 0 001.056 4.069L430.9 530.1a8.1 8.1 0 01-3.834 2.038z"
          transform="translate(385.087 172.379)"
          fill="#090814"
        />
        <Path
          data-name="Path 1065"
          d="M477.783 496.336c.47 6.26-10.25 13.459-24.609 16.315-13.185 2.7-25 .821-28.326-4.108a7.5 7.5 0 012.152-.861l49.53-11.189a7.3 7.3 0 011.252-.157z"
          transform="translate(387.97 172.382)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1066"
          d="M449.463 649.033l27.82-13.91-23.184-62.6-6.11-31.568a23.869 23.869 0 00-38.967-13.587 23.869 23.869 0 00-3.1 33.033l22.68 28.35z"
          transform="translate(382.034 178.595)"
          fill="#ffb9b9"
        />
        <Path
          data-name="Path 1067"
          d="M469.493 617.776L432.4 636.323l28.15 88.2a38.587 38.587 0 0027.823 25.806 38.587 38.587 0 0042.027-17.68L605.044 604.7a39.388 39.388 0 00-12.7-53.541 39.389 39.389 0 00-56.424 15.9l-45.562 97.083z"
          transform="translate(389.825 184.349)"
          fill="#3f3d56"
        />
        <Path
          data-name="Path 1068"
          d="M454.687 541.53a.617.617 0 01-.2-.034l-8.1-2.788a.622.622 0 01-.256-1.01l6.023-6.558a.623.623 0 11.917.842l-5.38 5.857 7.2 2.479a.623.623 0 01-.2 1.212z"
          transform="translate(393.158 180.883)"
          fill={bg}
        />
        <Path
          data-name="Path 1069"
          d="M462.41 539.706a.623.623 0 01-.433-1.07l5.474-5.293-7.354-3.03a.622.622 0 01.474-1.151l8.233 3.393a.622.622 0 01.2 1.023l-6.158 5.953a.622.622 0 01-.433.175z"
          transform="translate(396.535 180.435)"
          fill={bg}
        />
        <Path
          data-name="Path 1070"
          d="M454.454 546.431a.6.6 0 01-.183-.028.622.622 0 01-.412-.778l5.748-18.685a.623.623 0 111.191.367l-5.748 18.685a.623.623 0 01-.596.439z"
          transform="translate(395.09 179.793)"
          fill={bg}
        />
      </G>
    </Svg>
  );
};

export default Programmer;
