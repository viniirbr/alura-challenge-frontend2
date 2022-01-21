import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

export const exnportCode = (projectCode, id) => {
    var node = document.getElementById('codigo-container');
    const dataUrl = window.URL.createObjectURL

    htmlToImage.toPng(node)
    .then(function (dataUrl) {
      download(dataUrl, 'my-node.png');
    });
}