import "./about.css"

export function SnapShot(){
    return(
                   <div class="md:col-span-4 soft-card p-4 flex flex-col justify-between">
                                <div>
                                    <div class="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                                        <div class="flex items-center space-x-2">
                                            <i class="fa-solid fa-chart-line text-blue-600 text-xs"></i>
                                            <h2 class="text-xs font-bold text-slate-800 uppercase tracking-wider">Skills Snapshot</h2>
                                        </div>
                                    </div>

                                    {/* <!-- Mini SVG Radar --> */}
                                    <div class="flex items-center justify-center py-2">
                                        <svg viewBox="0 0 200 170" class="w-full max-w-[180px]">
                                            {/* <!-- Web Grid --> */}
                                            <polygon points="100,20 165,55 165,125 100,160 35,125 35,55" fill="none" stroke="#cbd5e1" stroke-width="1" />
                                            <polygon points="100,45 140,67 140,113 100,135 60,113 60,67" fill="none" stroke="#e2e8f0" stroke-width="1" />
                                            
                                            {/* <!-- Data Polygon --> */}
                                            <polygon points="100,28 158,60 152,118 100,148 48,118 42,58" fill="rgba(37, 99, 235, 0.2)" stroke="#2563eb" stroke-width="2" />
                                            
                                            {/* <!-- Labels --> */}
                                            <text x="100" y="12" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="middle">React</text>
                                            <text x="172" y="58" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="start">JavaScript</text>
                                            <text x="172" y="130" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="start">CSS</text>
                                            <text x="100" y="168" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="middle">HTML</text>
                                            <text x="28" y="130" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="end">Git</text>
                                            <text x="28" y="58" font-size="8" font-weight="bold" fill="#1e3a8a" text-anchor="end">Java</text>
                                        </svg>
                                    </div>

                                    {/* <!-- Currently Using Badges --> */}
                                    <div class="pt-2 border-t border-slate-100">
                                        <div class="text-[10px] text-slate-400 font-bold uppercase mb-1.5">Currently using:</div>
                                        <div class="flex items-center justify-between text-center">
                                            <div class="text-[9px] text-slate-600"><i class="fa-brands fa-react text-sky-500 text-sm block"></i>React</div>
                                            <div class="text-[9px] text-slate-600"><i class="fa-brands fa-js text-amber-500 text-sm block"></i>JS</div>
                                            <div class="text-[9px] text-slate-600"><i class="fa-brands fa-css3-alt text-blue-500 text-sm block"></i>CSS</div>
                                            <div class="text-[9px] text-slate-600"><i class="fa-brands fa-git-alt text-orange-600 text-sm block"></i>Git</div>
                                            <div class="text-[9px] text-slate-600"><i class="fa-brands fa-android text-emerald-500 text-sm block"></i>Android</div>
                                        </div>
                                    </div>
                                </div>
                                </div>
    )
}