import axios from "axios";
import Blob from "cross-blob";

export async function getContribution( contributed: Number ): Promise<string> {
    const response = await axios.get(
        'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD'
      )
  
      const json = response.data;

      function numberWithSpaces(x: Number): string {
        var parts = x.toFixed().toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        return parts.join(".");
      }

      return numberWithSpaces((Number(json.USD) * Number(contributed)));
}

export function generateHexString ( length: number ): string {
  if (
    typeof crypto !== 'undefined' &&
    typeof crypto.getRandomValues === 'function'
  ) {
    const tmp = new Uint8Array(Math.max(~~length / 2))
    crypto.getRandomValues(tmp)
    return Array.from(tmp)
      .map((n) => ('0' + n.toString(16)).substr(-2))
      .join('')
      .substr(0, length)
  }

  // fallback to Math.getRandomValues
  let ret = ''
  while (ret.length < length) {
    ret += Math.random().toString(16).substring(2)
  }
  return ret.substring(0, length)
}

export type Prediction = {
  date: string,
  salt: string
};

export function downloadUrl ( prediction: Prediction ): string | undefined {
  const blob = new Blob([JSON.stringify(prediction)], {type: 'application/json'});
  if (typeof window !== "undefined") {
    const url = window.URL.createObjectURL(blob);
    return url;
  }
}
