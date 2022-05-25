import React from 'react';

const Summary = () => {
    return (
        <section>
            <h1 className="text-3xl font-bold text-primary text-center">Business Summary</h1>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-base-100 shadow-lg py-10 my-5">
                <div>
                    <div class="stat ">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">customers</div>
                        <div class="stat-value text-primary">100+</div>
                        <div class="stat-desc">customers</div>
                    </div>
                </div>
                <div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Revenue </div>
                        <div class="stat-value text-secondary">120M+</div>
                        <div class="stat-desc">Annual revenue</div>
                    </div>
                </div>
                <div>
                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">33K+</div>
                        <div class="stat-title">Reviews</div>
                        <div class="stat-desc text-secondary">check review page</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Summary;