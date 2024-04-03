import { RelayInformation } from "../main.tsx";

export default function Home(information?: RelayInformation) {
  return (
      <>
          <div class="px-4 py-8 mx-auto bg-[#86efac]">
              <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                  <a class="text-4xl font-bold" href="https://github.com/BlowaterNostr/relayed" target="_blank">Relayed</a>
                  <ul class="my-4">
                    <li><span class="font-bold">Name:</span> {information?.name}</li>
                    <li><span class="font-bold">Description:</span> {information?.description}</li>
                    <li><span class="font-bold">Pubkey:</span> {information?.pubkey}</li>
                    <li><span class="font-bold">Contact:</span> {information?.contact}</li>
                    <li><span class="font-bold">Supported NIPs:</span> {information?.supported_nips?.join(", ")}</li>
                    <li><span class="font-bold">Software:</span> {information?.software}</li>
                    <li><span class="font-bold">Version:</span> {information?.version}</li>
                  </ul>
              </div>
          </div>
      </>
  );
}
