import { software, supported_nips } from "../main.ts";
import { RelayInformation } from "../resolvers/nip11.ts";

export default function Landing(information?: RelayInformation) {
    return (
        <>
            <head>
                <script src="https://cdn.tailwindcss.com"></script>
            </head>
            <div class="px-4 py-8 mx-auto bg-[#86efac]">
                <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
                    <h1 class="text-4xl font-bold">Relay</h1>
                    <ul class="my-4">
                        <li>
                            <span class="font-bold">Name:</span> {information?.name}
                        </li>
                        <li>
                            <span class="font-bold">Description:</span> {information?.description}
                        </li>
                        <li>
                            <span class="font-bold">Pubkey:</span> {information?.pubkey.hex}
                        </li>
                        <li>
                            <span class="font-bold">Contact:</span> {information?.contact}
                        </li>
                        <li>
                            <span class="font-bold">Supported NIPs:</span> {supported_nips.join(", ")}
                        </li>
                        <li>
                            <span class="font-bold">Software:</span>{" "}
                            <a href={software} target="_blank">{software}</a>
                        </li>
                        <li>
                            <span class="font-bold">Version:</span> {information?.version}
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
