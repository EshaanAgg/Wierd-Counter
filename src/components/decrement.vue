<template>
    <div>
		<div class="bg-white/70 flex flex-col p-3 aspect-square backdrop-blur-md rounded-xl w-36 align-middle border-4">
			<div class="flex">
			    <p class="font-semibold flex-1 text-lg text-black/70">Vue</p>
					<div>
						<svg
                            width="28"
                            height="28"
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.1"
                            viewBox="0 0 261.76 226.69"
                            >
                            <g transform="matrix(1.3333 0 0 -1.3333 -76.311 313.34)">
                                <g transform="translate(178.06 235.01)">
                                    <path
                                        d="m0 0-22.669-39.264-22.669 39.264h-75.491l98.16-170.02 98.16 170.02z"
                                        fill="#41b883"
                                    />
                                </g>
                                <g transform="translate(178.06 235.01)">
                                    <path
                                        d="m0 0-22.669-39.264-22.669 39.264h-36.227l58.896-102.01 58.896 102.01z"
                                        fill="#34495e"
                                    />
                                </g>
                            </g>
                        </svg>
					</div>
				</div>

				<div class="flex items-center justify-center m-auto">
					<button
						@click="decrement"
						class="text-black/80 hover:bg-black/5 w-20 h-20 flex justify-center items-center rounded-md">
                        <svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2.5}
							stroke="currentColor"
							className="w-32 h-32">
                            <path 
                                strokeLinecap="round"
                                strokeLinejoin="round" 
                                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
						</svg>
					</button>
				</div>
			</div>
		</div>
</template>
			
<script setup>
import { decrement } from "../stores/counter";
</script>