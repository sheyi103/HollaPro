<template>
    <div>
        <div>
            <header-component></header-component>
        </div>

        <div class="jumbotron">
            <div class="overflow-hidden p-1 text-center">
                <h1 class="jumbotron-header">
                    Book an Artisan/Professionals of your choice
                </h1>
                <h2>Choose from a range of categories of Professionals.</h2>
            </div>
            <div class="container">
                <div class="row mt-4">
                    <div class="card">
                        <div class="card-header">
                            <ul class="nav nav-pills card-header-pills">
                                <li class="nav-item">
                                    <a class="nav-link btn btn-full" href="#"
                                        >Request a Professional</a
                                    >
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link btn btn-ghost" href="#"
                                        >Earn</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="card-body" v-if="step === 1">
                            <h3 class="card-title">
                                Looking for a Professionals
                            </h3>
                            <h4 class="card-text">
                                Experienced Professionals are always at your
                                Service.
                            </h4>
                            <form @submit.prevent="fetchUsers()">
                                <div class="form-group">
                                    <div class="label">Locations</div>
                                    <select
                                        class="custom-select"
                                        v-model="area"
                                        required
                                    >
                                        <option
                                            v-for="location in userLocations"
                                            :key="location.title"
                                            :value="location.id"
                                        >
                                            {{ location.title }}
                                        </option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <div class="label">When</div>
                                    <input
                                        type="date"
                                        class="form-control"
                                        id="formGroupExampleInput2"
                                        placeholder="When?"
                                        v-model="time"
                                        required
                                    />
                                    <div class="invalid-feedback">
                                        Example invalid custom select feedback
                                    </div>
                                </div>

                                <div class="form-group">
                                    <div class="label">Category</div>
                                    <select
                                        v-model="category"
                                        class="custom-select"
                                        required
                                    >
                                        <option
                                            v-for="category in categories"
                                            :key="category.title"
                                            :value="category.id"
                                        >
                                            {{ category.title }}
                                        </option>
                                    </select>
                                </div>

                                <input
                                    type="submit"
                                    @click="fetchUsers()"
                                    value="Submit"
                                />
                            </form>
                        </div>
                        <div class="card-body step-two" v-if="step === 2">
                            <div class="card-nav">
                                <svg
                                    width="19"
                                    height="14"
                                    viewBox="0 0 19 14"
                                    fill="none"
                                    @click="step = step - 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.2792 6.29588H2.44774L7.59915 1.21684C7.66962 1.15204 7.72601 1.07405 7.76496 0.987502C7.80391 0.900958 7.82462 0.807639 7.82586 0.713108C7.82709 0.618578 7.80883 0.524772 7.77215 0.437285C7.73548 0.349798 7.68114 0.270421 7.61239 0.203889C7.54363 0.137356 7.46186 0.0850301 7.37196 0.0500306C7.28206 0.0150311 7.18586 -0.00192512 7.0891 0.000173522C6.99235 0.00227216 6.89702 0.0233826 6.80879 0.0622456C6.72057 0.101109 6.64126 0.156929 6.57559 0.226377L0.208416 6.50477C0.0748931 6.6366 0 6.81455 0 7C0 7.18545 0.0748931 7.3634 0.208416 7.49523L6.57559 13.7736C6.64126 13.8431 6.72057 13.8989 6.80879 13.9378C6.89702 13.9766 6.99235 13.9977 7.0891 13.9998C7.18586 14.0019 7.28206 13.985 7.37196 13.95C7.46186 13.915 7.54363 13.8626 7.61239 13.7961C7.68114 13.7296 7.73548 13.6502 7.77215 13.5627C7.80883 13.4752 7.82709 13.3814 7.82586 13.2869C7.82462 13.1924 7.80391 13.099 7.76496 13.0125C7.72601 12.926 7.66962 12.848 7.59915 12.7832L2.44774 7.70412H18.2792C18.3738 7.70412 18.4676 7.68591 18.555 7.65052C18.6425 7.61514 18.7219 7.56327 18.7889 7.49789C18.8558 7.4325 18.9089 7.35488 18.9451 7.26946C18.9814 7.18403 19 7.09247 19 7C19 6.90753 18.9814 6.81597 18.9451 6.73055C18.9089 6.64512 18.8558 6.5675 18.7889 6.50211C18.7219 6.43673 18.6425 6.38486 18.555 6.34948C18.4676 6.31409 18.3738 6.29588 18.2792 6.29588Z"
                                        fill="#444643"
                                    />
                                </svg>

                                <span>
                                    Search result for {{ selectedCategory }}
                                </span>
                            </div>
                            <ul>
                                <li
                                    v-for="(user, n) in artisans"
                                    @click="pickUser(user.id)"
                                    :key="'user' + n"
                                >
                                    <div class="row">
                                        <div class="col-sm-2">
                                            <div class="user-avatar">
                                                <img
                                                    src="https://randomuser.me/api/portraits/men/15.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 user-details">
                                            <p class="name">
                                                {{ user.artisan.name }}
                                            </p>
                                            <p class="job">
                                                <svg
                                                    width="11"
                                                    height="10"
                                                    viewBox="0 0 11 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.3594 1.21951C10.3587 1.21951 10.3581 1.21943 10.3574 1.21943H7.52318V0.914572C7.52318 0.410287 7.10248 0 6.58539 0H4.08461C3.56752 0 3.14682 0.410287 3.14682 0.914572V1.21943H0.312598C0.138552 1.21943 0 1.35852 0 1.52429V8.23114C0 8.73543 0.420704 9.14571 0.937793 9.14571H9.73221C10.2493 9.14571 10.67 8.73543 10.67 8.23114V1.53072C10.67 1.53032 10.67 1.52992 10.67 1.52953C10.658 1.3293 10.5318 1.22062 10.3594 1.21951ZM3.77201 0.914572C3.77201 0.746503 3.91227 0.609714 4.08461 0.609714H6.58539C6.75773 0.609714 6.89799 0.746503 6.89799 0.914572V1.21943H3.77201V0.914572ZM9.92367 1.82914L8.95291 4.66924C8.91034 4.79396 8.79116 4.87771 8.65643 4.87771H6.89799V4.57286C6.89799 4.40447 6.75805 4.268 6.58539 4.268H4.08461C3.91195 4.268 3.77201 4.40447 3.77201 4.57286V4.87771H2.01357C1.87884 4.87771 1.75966 4.79396 1.71709 4.66924L0.746327 1.82914H9.92367ZM6.27279 4.87771V5.48743H4.39721V4.87771H6.27279ZM10.0448 8.23114C10.0448 8.39921 9.90454 8.536 9.73221 8.536H0.937793C0.765457 8.536 0.625195 8.39921 0.625195 8.23114V3.40289L1.12397 4.86207C1.25177 5.23616 1.60931 5.48743 2.01357 5.48743H3.77201V5.79229C3.77201 5.96067 3.91195 6.09714 4.08461 6.09714H6.58539C6.75805 6.09714 6.89799 5.96067 6.89799 5.79229V5.48743H8.65643C9.06069 5.48743 9.41823 5.23616 9.54603 4.86207L10.0448 3.40289V8.23114Z"
                                                        fill="#6A6E70"
                                                    />
                                                </svg>

                                                <span>
                                                    {{ user.category.title }}
                                                </span>
                                            </p>
                                            <p class="rating">
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clip-path="url(#clip0)">
                                                        <path
                                                            d="M11.6648 5.69416C11.9689 5.39789 12.0762 4.96305 11.9449 4.55955C11.8139 4.15589 11.4715 3.86721 11.0514 3.80616L8.45714 3.42921C8.32545 3.40999 8.21166 3.32733 8.15278 3.20808L6.99261 0.857109C6.80475 0.476602 6.42439 0.240234 5.99998 0.240234C5.57557 0.240234 5.19521 0.476602 5.00735 0.857109C5.00735 0.857133 3.84718 3.20805 3.84718 3.20805C3.7883 3.32735 3.67451 3.41002 3.54303 3.42919L0.948636 3.80613C0.528449 3.86721 0.18605 4.15589 0.0551049 4.55934C-0.0762155 4.96305 0.0311049 5.39791 0.335113 5.69409L2.21241 7.52419C2.30764 7.61698 2.35109 7.75064 2.32866 7.88159L1.88541 10.4657C1.81378 10.884 1.98251 11.2988 2.32575 11.5481C2.66907 11.7976 3.11578 11.8299 3.49163 11.6325L5.81199 10.4125C5.92969 10.3507 6.07025 10.3507 6.18783 10.4125L8.50838 11.6325C8.88422 11.8299 9.33094 11.7976 9.67425 11.5481C10.0175 11.2988 10.1862 10.884 10.1146 10.4657L9.67132 7.8817C9.64889 7.75064 9.69232 7.61698 9.78762 7.52412L11.6648 5.69416Z"
                                                            fill="#FFD738"
                                                        />
                                                        <path
                                                            d="M6.18785 10.4125L8.5084 11.6325C8.88424 11.8299 9.33096 11.7976 9.67427 11.5481C10.0175 11.2988 10.1862 10.884 10.1146 10.4656L9.67134 7.88168C9.64891 7.75059 9.69234 7.61695 9.78764 7.52409L11.6648 5.69416C11.9689 5.39789 12.0762 4.96305 11.945 4.55955C11.814 4.15589 11.4716 3.86721 11.0514 3.80616L8.45716 3.42921C8.32547 3.40999 8.21168 3.32733 8.15283 3.20808L6.99263 0.857109C6.80477 0.476602 6.42441 0.240234 6 0.240234V10.3661C6.06455 10.3661 6.12907 10.3816 6.18785 10.4125Z"
                                                            fill="#FFA222"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect
                                                                width="12"
                                                                height="12"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>
                                                    {{
                                                        user.artisan
                                                            .current_rating
                                                    }}
                                                </span>
                                            </p>
                                        </div>
                                        <div
                                            v-if="
                                                user.activity_status !==
                                                    'Available'
                                            "
                                            class="col-sm-4 engagement"
                                        >
                                            <div class="engaged">
                                                Engaged
                                            </div>
                                        </div>
                                        <div v-else class="col-sm-4 engagement">
                                            <p class="">
                                                <svg
                                                    width="10"
                                                    height="15"
                                                    viewBox="0 0 10 15"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        clip-rule="evenodd"
                                                        d="M0 5C0 2.243 2.243 0 5 0C7.757 0 10 2.243 10 5C10 5.90386 9.75614 6.78967 9.29475 7.56167L5.42689 14.0197C5.35225 14.1443 5.21803 14.2211 5.07272 14.2222H5.06942C4.92536 14.2222 4.79142 14.1478 4.71539 14.0253L0.746361 7.62922C0.258028 6.84056 0 5.9315 0 5ZM5.06311 13.0052L8.57961 7.13383C8.96358 6.49133 9.16945 5.75336 9.16945 5C9.16945 2.7025 7.2975 0.827778 5 0.827778C2.7025 0.827778 0.827778 2.7025 0.827778 5C0.827778 5.77639 1.04817 6.53372 1.45464 7.19017L5.06311 13.0052ZM2.5 5C2.5 3.6215 3.6215 2.5 5 2.5C6.3785 2.5 7.5 3.6215 7.5 5C7.5 6.35464 6.41397 7.5 5 7.5C3.60325 7.5 2.5 6.36969 2.5 5ZM3.32778 5C3.32778 5.92131 4.07619 6.67222 5 6.67222C5.93844 6.67222 6.66944 5.90786 6.66944 5C6.66944 4.081 5.919 3.32778 5 3.32778C4.081 3.32778 3.32778 4.081 3.32778 5Z"
                                                        fill="#AFB7B9"
                                                    />
                                                </svg>
                                                <span class="distance">
                                                    20km Away
                                                </span>
                                            </p>
                                            <p class="available">
                                                Available
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div class="card-body step-two" v-if="step === 3">
                            <div class="card-nav">
                                <svg
                                    width="19"
                                    height="14"
                                    viewBox="0 0 19 14"
                                    fill="none"
                                    @click="step = step - 1"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M18.2792 6.29588H2.44774L7.59915 1.21684C7.66962 1.15204 7.72601 1.07405 7.76496 0.987502C7.80391 0.900958 7.82462 0.807639 7.82586 0.713108C7.82709 0.618578 7.80883 0.524772 7.77215 0.437285C7.73548 0.349798 7.68114 0.270421 7.61239 0.203889C7.54363 0.137356 7.46186 0.0850301 7.37196 0.0500306C7.28206 0.0150311 7.18586 -0.00192512 7.0891 0.000173522C6.99235 0.00227216 6.89702 0.0233826 6.80879 0.0622456C6.72057 0.101109 6.64126 0.156929 6.57559 0.226377L0.208416 6.50477C0.0748931 6.6366 0 6.81455 0 7C0 7.18545 0.0748931 7.3634 0.208416 7.49523L6.57559 13.7736C6.64126 13.8431 6.72057 13.8989 6.80879 13.9378C6.89702 13.9766 6.99235 13.9977 7.0891 13.9998C7.18586 14.0019 7.28206 13.985 7.37196 13.95C7.46186 13.915 7.54363 13.8626 7.61239 13.7961C7.68114 13.7296 7.73548 13.6502 7.77215 13.5627C7.80883 13.4752 7.82709 13.3814 7.82586 13.2869C7.82462 13.1924 7.80391 13.099 7.76496 13.0125C7.72601 12.926 7.66962 12.848 7.59915 12.7832L2.44774 7.70412H18.2792C18.3738 7.70412 18.4676 7.68591 18.555 7.65052C18.6425 7.61514 18.7219 7.56327 18.7889 7.49789C18.8558 7.4325 18.9089 7.35488 18.9451 7.26946C18.9814 7.18403 19 7.09247 19 7C19 6.90753 18.9814 6.81597 18.9451 6.73055C18.9089 6.64512 18.8558 6.5675 18.7889 6.50211C18.7219 6.43673 18.6425 6.38486 18.555 6.34948C18.4676 6.31409 18.3738 6.29588 18.2792 6.29588Z"
                                        fill="#444643"
                                    />
                                </svg>

                                <span>
                                    {{
                                        selectedUse.artisan.name.split(" ")[0]
                                    }}'s Profile
                                </span>
                            </div>
                            <ul>
                                <li>
                                    <div class="row">
                                        <div class="col-sm-2">
                                            <div class="user-avatar">
                                                <img
                                                    src="https://randomuser.me/api/portraits/men/15.jpg"
                                                    alt=""
                                                />
                                            </div>
                                        </div>
                                        <div class="col-sm-6 user-details">
                                            <p class="name">
                                                {{ selectedUse.artisan.name }}
                                            </p>
                                            <p class="job">
                                                <svg
                                                    width="11"
                                                    height="10"
                                                    viewBox="0 0 11 10"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        d="M10.3594 1.21951C10.3587 1.21951 10.3581 1.21943 10.3574 1.21943H7.52318V0.914572C7.52318 0.410287 7.10248 0 6.58539 0H4.08461C3.56752 0 3.14682 0.410287 3.14682 0.914572V1.21943H0.312598C0.138552 1.21943 0 1.35852 0 1.52429V8.23114C0 8.73543 0.420704 9.14571 0.937793 9.14571H9.73221C10.2493 9.14571 10.67 8.73543 10.67 8.23114V1.53072C10.67 1.53032 10.67 1.52992 10.67 1.52953C10.658 1.3293 10.5318 1.22062 10.3594 1.21951ZM3.77201 0.914572C3.77201 0.746503 3.91227 0.609714 4.08461 0.609714H6.58539C6.75773 0.609714 6.89799 0.746503 6.89799 0.914572V1.21943H3.77201V0.914572ZM9.92367 1.82914L8.95291 4.66924C8.91034 4.79396 8.79116 4.87771 8.65643 4.87771H6.89799V4.57286C6.89799 4.40447 6.75805 4.268 6.58539 4.268H4.08461C3.91195 4.268 3.77201 4.40447 3.77201 4.57286V4.87771H2.01357C1.87884 4.87771 1.75966 4.79396 1.71709 4.66924L0.746327 1.82914H9.92367ZM6.27279 4.87771V5.48743H4.39721V4.87771H6.27279ZM10.0448 8.23114C10.0448 8.39921 9.90454 8.536 9.73221 8.536H0.937793C0.765457 8.536 0.625195 8.39921 0.625195 8.23114V3.40289L1.12397 4.86207C1.25177 5.23616 1.60931 5.48743 2.01357 5.48743H3.77201V5.79229C3.77201 5.96067 3.91195 6.09714 4.08461 6.09714H6.58539C6.75805 6.09714 6.89799 5.96067 6.89799 5.79229V5.48743H8.65643C9.06069 5.48743 9.41823 5.23616 9.54603 4.86207L10.0448 3.40289V8.23114Z"
                                                        fill="#6A6E70"
                                                    />
                                                </svg>

                                                <span>
                                                    {{
                                                        selectedUse.category
                                                            .title
                                                    }}
                                                </span>
                                            </p>
                                            <p class="rating">
                                                <svg
                                                    width="12"
                                                    height="12"
                                                    viewBox="0 0 12 12"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g clip-path="url(#clip0)">
                                                        <path
                                                            d="M11.6648 5.69416C11.9689 5.39789 12.0762 4.96305 11.9449 4.55955C11.8139 4.15589 11.4715 3.86721 11.0514 3.80616L8.45714 3.42921C8.32545 3.40999 8.21166 3.32733 8.15278 3.20808L6.99261 0.857109C6.80475 0.476602 6.42439 0.240234 5.99998 0.240234C5.57557 0.240234 5.19521 0.476602 5.00735 0.857109C5.00735 0.857133 3.84718 3.20805 3.84718 3.20805C3.7883 3.32735 3.67451 3.41002 3.54303 3.42919L0.948636 3.80613C0.528449 3.86721 0.18605 4.15589 0.0551049 4.55934C-0.0762155 4.96305 0.0311049 5.39791 0.335113 5.69409L2.21241 7.52419C2.30764 7.61698 2.35109 7.75064 2.32866 7.88159L1.88541 10.4657C1.81378 10.884 1.98251 11.2988 2.32575 11.5481C2.66907 11.7976 3.11578 11.8299 3.49163 11.6325L5.81199 10.4125C5.92969 10.3507 6.07025 10.3507 6.18783 10.4125L8.50838 11.6325C8.88422 11.8299 9.33094 11.7976 9.67425 11.5481C10.0175 11.2988 10.1862 10.884 10.1146 10.4657L9.67132 7.8817C9.64889 7.75064 9.69232 7.61698 9.78762 7.52412L11.6648 5.69416Z"
                                                            fill="#FFD738"
                                                        />
                                                        <path
                                                            d="M6.18785 10.4125L8.5084 11.6325C8.88424 11.8299 9.33096 11.7976 9.67427 11.5481C10.0175 11.2988 10.1862 10.884 10.1146 10.4656L9.67134 7.88168C9.64891 7.75059 9.69234 7.61695 9.78764 7.52409L11.6648 5.69416C11.9689 5.39789 12.0762 4.96305 11.945 4.55955C11.814 4.15589 11.4716 3.86721 11.0514 3.80616L8.45716 3.42921C8.32547 3.40999 8.21168 3.32733 8.15283 3.20808L6.99263 0.857109C6.80477 0.476602 6.42441 0.240234 6 0.240234V10.3661C6.06455 10.3661 6.12907 10.3816 6.18785 10.4125Z"
                                                            fill="#FFA222"
                                                        />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0">
                                                            <rect
                                                                width="12"
                                                                height="12"
                                                                fill="white"
                                                            />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                                <span>
                                                    {{
                                                        selectedUse.artisan
                                                            .current_rating
                                                    }}
                                                </span>
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <p class="other">
                                        Other Skills
                                    </p>
                                    <p class="skills">
                                        <span>
                                            {{ selectedUse.category.title }}
                                        </span>
                                    </p>
                                </li>
                            </ul>
                            <div class="btn-wrap">
                                <input
                                    @click="requestProfessional()"
                                    type="submit"
                                    value="Request this professional"
                                />
                            </div>
                        </div>
                    </div>
                    <!-- <div class="slider-image shadow-sm d-none d-md-block">
            <img src="../images/photographer.png" alt="homepage image" class="header_image">
          </div> -->
                </div>
            </div>
            <div class="container">
                <div class="row step-header">
                    <div class="col-sm step-box">
                        <div class="step-check">
                            <img
                                src="../images/get-job.png"
                                alt="professional Work"
                                class="overley-image"
                            />
                            <div>
                                <h4 class="overley-header">
                                    Get the job done with pro
                                </h4>
                                <p class="overley-paragraph">
                                    No more disappointment
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm step-box step-border">
                        <div class="step-check">
                            <img
                                src="../images/upgrade.png"
                                alt="professional Work"
                                class="overley-image"
                            />
                            <div>
                                <h4 class="overley-header">
                                    Upgrade to Premium
                                </h4>
                                <p class="overley-paragraph">
                                    Explore all benefit of HollaPro
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm step-box">
                        <div class="step-check">
                            <img
                                src="../images/sign-up.png"
                                alt="professional Work"
                                class="overley-image"
                            />
                            <div>
                                <h4 class="overley-header">
                                    Sign Up for Corporate
                                </h4>
                                <p class="overley-paragraph">
                                    Searching for professionals for your
                                    busniess made easy
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section class="section-professionals">
            <div class="container ok">
                <div class="row mt-5">
                    <div class="professional">
                        <h3 class="professional-header">Holla Professionals</h3>
                        <p class="professional-paragraph">
                            Holla Professional in every business
                        </p>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm professional-box">
                        <div class="professional-card">
                            <img
                                src="../images/signup.png"
                                class="card-img-top"
                                alt="..."
                            />
                            <img
                                src="../images/holla.png"
                                class="img-thumbnail round-logo"
                                alt=""
                            />
                            <div class="card-body">
                                <h4 class="professional-card-title">
                                    WHY SIGNUP WITH US
                                </h4>
                                <p class="professional-card-paragragh">
                                    Holla Professional is a platform that
                                    connect every professionals to its potential
                                    clients and also we make the connection so
                                    seamless and easy to use. As a Professional
                                    you have all the power in your hand of to
                                    choose where and who to work with
                                </p>
                                <a href="#" class="signup-link"
                                    >Sign Up now as a Professional!!!</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-sm professional-box">
                        <div class="professional-card">
                            <img
                                src="../images/benefits.png"
                                class="card-img-top"
                                alt="..."
                            />
                            <img
                                src="../images/holla.png"
                                class="img-thumbnail round-logo"
                                alt=""
                            />
                            <div class="card-body">
                                <h4 class="professional-card-title">
                                    BENEFITS
                                </h4>
                                <p class="professional-card-paragragh">
                                    We Offer a wide range of benefit for our
                                    Professionals. Aside from earning from your
                                    day to day service rendered, you ccan still
                                    be qualified for HEALTH INSURANCE and
                                    PENSION, for more info on our Benefits
                                    please read Terms and Conditions
                                </p>
                                <a href="#" class="signup-link"
                                    >Sign Up now as a Professional!!</a
                                >
                            </div>
                        </div>
                    </div>
                    <div class="col-sm professional-box">
                        <div class="professional-card">
                            <img
                                src="../images/oyo.png"
                                class="card-img-top"
                                alt="..."
                            />
                            <img
                                src="../images/holla.png"
                                class="img-thumbnail round-logo"
                                alt=""
                            />
                            <div class="card-body">
                                <h4 class="professional-card-title">
                                    BE YOUR OWN BOSS
                                </h4>
                                <p class="professional-card-paragragh">
                                    We make you be your own Boss at HollaPro,
                                    you can choose where to work, who to work
                                    with and earn both your service money and
                                    also benefits we provide. What are you
                                    waiting for?, Sign Up as a Professional
                                    now!!!
                                </p>
                                <a href="#" class="signup-link"
                                    >Sign Up now as a Professional!!!</a
                                >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="section-why">
            <div class="paragraph-heading">
                <h3 class="professional-header">Why HollaPro&#63;</h3>
                <p class="professional-paragraph">
                    The best and professional way to get all your job done
                </p>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-sm why-box">
                        <img
                            src="../images/professionalwork.png"
                            alt="professional Work"
                            class="professionalwork"
                        />
                        <div class="other-text">
                            <h4>Professionals for every job</h4>
                            <p>
                                With HollaPro getting professionals just got
                                easier, with our web platform and mobile app you
                                can easily get a wide range of professionals of
                                all Kinds.
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="col-sm why-box">
                        <img
                            src="../images/secure_and_safe.png"
                            alt="professional Work"
                            class="professionalwork"
                        />
                        <div class="other-text">
                            <h4>Secure and safe to use</h4>
                            <p>
                                We run a At HollaPro Customer safety is our top
                                Priority
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm why-box">
                        <img
                            src="../images/easy_to_use.png"
                            alt="professional Work"
                            class="professionalwork"
                        />
                        <div class="other-text">
                            <h4>Easy to Use</h4>
                            <p>
                                Our Platform was well designed putting in
                                consideration a great user Experience.
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="col-sm why-box">
                        <img
                            src="../images/all_professionals.png"
                            alt="professional Work"
                            class="professionalwork"
                        />
                        <div class="other-text">
                            <h4>All Professionals</h4>
                            <p>
                                At HollPro we cover a wide range of every kind
                                of professionals which means for every job you
                                don’t have to be troubled we got you covered.
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm why-box">
                        <img
                            src="../images/experience_professionals.png"
                            alt="professional Work"
                            class="professionalwork"
                        />
                        <div class="other-text">
                            <h4>Experienced Professionals</h4>
                            <p>
                                All our Artisans and Professionals are
                                background verified and trained to deliver only
                                the best experience.
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <div class="col-sm why-box">
                        <img
                            src="../images/24:7.png"
                            alt="professional Work"
                            class="professionalwork"
                            id="customer-support"
                        />
                        <div class="other-text">
                            <h4>24/7 Customer support</h4>
                            <p>
                                A dedicated customer support team always at your
                                serviec to help solve any problem.
                            </p>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section-category">
            <div class="paragraph-heading">
                <h3 class="professional-header">Explore our Categories</h3>
                <p class="professional-paragraph">
                    The widest variety of Professionals to choose from
                </p>
            </div>
        </section>
        <section class="section-slider">
            <div class="row">
                <div class="col-sm slider-category">
                    <div
                        id="myCarousel"
                        class="carousel slide"
                        data-ride="carousel"
                    >
                        <div class="row carousel-indicators slider-icon ">
                            <img
                                data-target="#myCarousel"
                                data-slide-to="0"
                                class="active single-slider-icon pr-4"
                                src="../images/plumber.png"
                            />
                            <img
                                data-target="#myCarousel"
                                data-slide-to="1"
                                class="single-slider-icon pr-4"
                                src="../images/electrician.png"
                            />
                            <img
                                data-target="#myCarousel"
                                data-slide-to="2"
                                class="single-slider-icon pr-4"
                                src="../images/mechanic.png"
                            />
                            <img
                                data-target="#myCarousel"
                                data-slide-to="3"
                                class="single-slider-icon pr-4"
                                src="../images/IT.png"
                            />
                            <img
                                data-target="#myCarousel"
                                data-slide-to="4"
                                class="single-slider-icon pr-4"
                                src="../images/maid.png"
                            />
                            <img
                                data-target="#myCarousel"
                                data-slide-to="5"
                                class="single-slider-icon pr-4"
                                src="../images/plumber.png"
                            />
                            <img
                                data-target="#myCarousel"
                                data-slide-to="6"
                                class="single-slider-icon pr-4"
                                src="../images/electrician.png"
                            /><img
                                data-target="#myCarousel"
                                data-slide-to="7"
                                class="single-slider-icon pr-4"
                                src="../images/mechanic.png"
                            /><img
                                data-target="#myCarousel"
                                data-slide-to="8"
                                class="single-slider-icon pr-4"
                                src="../images/IT.png"
                            /><img
                                data-target="#myCarousel"
                                data-slide-to="9"
                                class="single-slider-icon pr-4"
                                src="../images/maid.png"
                            /><img
                                data-target="#myCarousel"
                                data-slide-to="10"
                                class="single-slider-icon pr-4"
                                src="../images/plumber.png"
                            /><img
                                data-target="#myCarousel"
                                data-slide-to="11"
                                class="single-slider-icon pr-4"
                                src="../images/electrician.png"
                            /><img
                                data-target="#myCarousel"
                                data-slide-to="12"
                                class="single-slider-icon pr-4"
                                src="../images/mechanic.png"
                            />
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active carousel-1">
                                <div class="container">
                                    <img
                                        src="../images/slider-image.png"
                                        class="slider-image"
                                        alt="slider-image"
                                    />
                                    <div class="carousel-caption slider-text">
                                        <h1>Plumber.</h1>
                                        <h2>
                                            Get a Plumber to your doorstep now!
                                        </h2>
                                        <p>
                                            Our professionals are readily
                                            available to serve you with what
                                            everr services you need and we’re
                                            justa call away.
                                        </p>

                                        <a class="link " href="#" role="button"
                                            >Book this Professional</a
                                        >
                                        <div>
                                            <i
                                                class="fa fa-money fa-2x"
                                                aria-hidden="true"
                                            ></i>

                                            <i
                                                class="fa fa-credit-card fa-2x"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-2">
                                <div class="container">
                                    <img
                                        src="../images/slider-image.png"
                                        class="slider-image"
                                        alt="slider-image"
                                    />
                                    <div class="carousel-caption slider-text">
                                        <h1>Electrician.</h1>
                                        <h2>
                                            Get an electrician to your doorstep
                                            now!
                                        </h2>
                                        <p>
                                            Our professionals are readily
                                            available to serve you with what
                                            everr services you need and we’re
                                            justa call away.
                                        </p>

                                        <a class="link " href="#" role="button"
                                            >Book this Professional</a
                                        >
                                        <div>
                                            <i
                                                class="fa fa-money fa-2x"
                                                aria-hidden="true"
                                            ></i>

                                            <i
                                                class="fa fa-credit-card fa-2x"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-3">
                                <div class="container">
                                    <img
                                        src="../images/slider-image.png"
                                        class="slider-image"
                                        alt="slider-image"
                                    />
                                    <div class="carousel-caption slider-text">
                                        <h1>Mechanic</h1>
                                        <h2>
                                            Get a mechanic to your doorstep now!
                                        </h2>
                                        <p>
                                            Our professionals are readily
                                            available to serve you with what
                                            everr services you need and we’re
                                            justa call away.
                                        </p>

                                        <a class="link " href="#" role="button"
                                            >Book this Professional</a
                                        >
                                        <div>
                                            <i
                                                class="fa fa-money fa-2x"
                                                aria-hidden="true"
                                            ></i>

                                            <i
                                                class="fa fa-credit-card fa-2x"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item carousel-4">
                                <div class="container">
                                    <img
                                        src="../images/IT-support.png"
                                        class="slider-image"
                                        alt="slider-image"
                                    />
                                    <div class="carousel-caption slider-text">
                                        <h1>IT Support</h1>
                                        <h2>
                                            Get an IT Support to your doorstep
                                            now!
                                        </h2>
                                        <p>
                                            Our professionals are readily
                                            available to serve you with what
                                            everr services you need and we’re
                                            justa call away.
                                        </p>

                                        <a class="link " href="#" role="button"
                                            >Book this Professional</a
                                        >
                                        <div>
                                            <i
                                                class="fa fa-money fa-2x"
                                                aria-hidden="true"
                                            ></i>

                                            <i
                                                class="fa fa-credit-card fa-2x"
                                                aria-hidden="true"
                                            ></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a
                            class="carousel-control-prev"
                            href="#myCarousel"
                            role="button"
                            data-slide="prev"
                        >
                            <span
                                class="carousel-control-prev-icon carousal-control"
                                aria-hidden="true"
                            ></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href="#myCarousel"
                            role="button"
                            data-slide="next"
                        >
                            <span
                                class="carousel-control-next-icon carousal-control"
                                aria-hidden="true"
                            ></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Book a Pofessional starts here -->
        <app-component></app-component>
        <!-- footer start -->
        <mainfooter-component></mainfooter-component>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import Footer from "../Authorization/AuthFooter";
export default {
    data() {
        return {
            step: 1,
            userLocations: [],
            categories: [],
            artisans: [],
            area: "",
            time: "",
            category: "",
            searchValue: "",
            selectedUserIndex: null
        };
    },
    computed: {
        ...mapGetters({
            user: "getUser"
        }),
        selectedCategory() {
            let cat = this.categories.find(
                category => category.id === this.category
            );
            return cat ? cat.title : "";
        },
        selectedUse() {
            let user = this.artisans.find(
                user => user.id === this.selectedUserIndex
            );
            return user;
        }
    },
    mounted() {
        if (this.user) {
            axios
                .get(
                    `https://hollapro.com/api/v1/areas/${this.user.area.state_id}/load`
                )
                .then(res => {
                    this.userLocations = res.data.data;
                })
                .catch(err => {
                    console.log(err);
                });
        }
        axios
            .get(`https://hollapro.com/api/v1/categories`)
            .then(res => {
                console.log(res.data.data);
                this.categories = res.data.data;
            })
            .catch(err => {
                console.log(err);
            });
    },
    components: {
        Footer: Footer
    },
    methods: {
        fetchUsers() {
            axios
                .get(
                    `https://hollapro.com/api/v1/user/artisans/category/${this.category}/artisans/all?provider=users`
                )
                .then(res => {
                    console.log(res.data.data);
                    this.artisans = res.data.data;
                    this.step = 2;
                })
                .catch(err => {
                    console.log(err);
                });
        },
        pickUser(i) {
            this.selectedUserIndex = i;
            this.step = 3;

            // these do not return anything i cant get from the users profile so they're redundant
            // this.getOtherSkills(i);
            // this.getArtisanProfile(i);
        },
        getArtisanProfile(id) {
            axios
                .get(
                    `https://hollapro.com/api/v1/user/artisans/profile/${this.selectedUse.artisan.id}?provider=users`
                )
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        getOtherSkills(id) {
            axios
                .get(
                    `https://hollapro.com/api/v1/user/artisans/other-skills/${this.selectedUse.artisan.id}/${this.category}?provider=users`
                )
                .then(res => {
                    console.log(res.data);
                })
                .catch(err => {
                    console.log(err);
                });
        },
        requestProfessional() {
            let data = {
                artisan_category_id: this.category,
                request_address: "2 Abiodun street, Westwood Ave, Ajah, Lagos",
                lat: 0.0,
                long: 0.9999999999,
                location_url: ""
            };
            axios
                .post(
                    `https://hollapro.com/api/v1/user/artisans/category/${this.category}/artisans/all?provider=users`,
                    data
                )
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }
};
</script>
<style lang="scss" scoped>
.card {
    overflow-x: hidden;
    width: 400px;
    .card-body {
        max-height: 340px;
        min-height: 300px;
        overflow: auto;
        .card-nav {
            text-align: center;
            font-size: 14px;
            font-weight: 500;
            padding: 12px 20px;
            svg {
                float: left;
                margin-top: 5px;
            }
            span {
                margin-left: -10px;
            }
        }
    }
    .step-two {
        padding: 0 !important;
        position: relative;
        ul {
            padding-left: 0;
            li {
                list-style-type: none;
                padding: 8px 20px;
                cursor: pointer;
                &:nth-child(odd) {
                    background: #f7f7f7;
                    border-bottom: 0.5px solid #d1d5d6;
                    border-top: 0.5px solid #d1d5d6;
                }
                .user-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    overflow: hidden;
                    margin-top: 5px;
                    img {
                        object-fit: cover;
                        width: 100%;
                    }
                }
                .user-details {
                    padding-left: 20px;
                    p {
                        margin: 0;
                        font-size: 14px;
                        line-height: 18px;
                        span {
                            padding-left: 15px;
                        }
                    }
                    .name {
                        font-weight: 500;
                        color: #3a4a4e;
                    }
                    .job {
                        color: #6a6e70;
                    }
                    .rating {
                        color: #ffa222;
                        font-weight: 600;
                    }
                }
                .engagement {
                    text-align: right;
                    .engaged {
                        font-weight: 500;
                        font-size: 12px;
                        line-height: 19px;
                        color: #ff766f;
                        padding-top: 15px;
                    }
                    p {
                        margin-bottom: 0;
                        .distance {
                            font-size: 12px;
                            line-height: 19px;
                            color: #afb7b9;
                        }
                        &.available {
                            font-weight: 500;
                            font-size: 12px;
                            line-height: 19px;
                            color: #70b938;
                        }
                    }
                }
                .other {
                    font-weight: 600;
                    font-size: 12px;
                    line-height: 19px;
                    color: #292929;
                    margin: 0;
                }
                .skills {
                    span {
                        background: #fafafa;
                        border: 1px solid #e5ecf3;
                        padding: 4px 10px;
                        border-radius: 6px;
                        margin-right: 10px;
                        font-size: 12px;
                    }
                }
            }
        }
        .btn-wrap {
            position: absolute;
            bottom: 0;
            padding: 10px 10px 0px;
            border-top: 1px solid #c2dff2;
            width: 100%;
        }
    }
}
.card-text {
    margin-bottom: 20px;
}
.form-group {
    padding: 0 12px 0 0;
    input,
    select {
        border: 0;
        height: 45px;
        background-color: transparent;
        box-shadow: unset;
        font-size: 14px;
        &:focus {
            border: 0;
        }
    }
}
</style>
