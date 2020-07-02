<template>
	<div class="main">
		<nav :class="[showMenu ? 'navbar-move' : '', 'navbar is-fixed-top']" role="navigation" aria-label="main navigation">
			<div class="navbar-menu-entry" @click="changeShowMenu()">
				<div v-if="showMenu" class="navbar-menu-entry-text">×</div>
				<img v-else src="~/assets/menu-entry.png" />
			</div>
			<nuxt-link class="navbar-logo" to="/mobile">
				<img src="~/assets/logo.png" />
			</nuxt-link>
			<div class="navbar-buy">
				<img src="~/assets/navbar-buy.png" />
			</div>
		</nav>

		<div class="menu-wrap">
			<div :class="[showMenu ? 'menu-mask-show' : '', 'menu-mask']" @click="clickMenuMask()"></div>
			<div :class="[showMenu ? 'menu-show' : '', 'menu']">
				<div class="menu-item">
					<nuxt-link class="menu-title" to="/mobile">智能门锁</nuxt-link>
					<div class="menu-sub">
						<nuxt-link class="menu-sub-item" to="/mobile/m1">智能指纹锁M1</nuxt-link>
						<nuxt-link class="menu-sub-item" to="/mobile/p1">智能指纹锁P1</nuxt-link>
						<nuxt-link class="menu-sub-item" to="/mobile/t1">智能指纹锁T1</nuxt-link>
						<nuxt-link class="menu-sub-item" to="">配件</nuxt-link>
					</div>
				</div>
				<div class="menu-item">
					<nuxt-link class="menu-title" to="/mobile/aboutus/company-produce">关于我们</nuxt-link>
					<div class="menu-sub">
						<nuxt-link class="menu-sub-item" to="/mobile/aboutus/company-produce">公司简介</nuxt-link>
						<nuxt-link class="menu-sub-item" to="/mobile/aboutus/brand-history">品牌故事</nuxt-link>
						<nuxt-link class="menu-sub-item" to="/mobile/aboutus/pd-only">专利声明</nuxt-link>
						<nuxt-link class="menu-sub-item" to="/mobile/aboutus/service">售后服务</nuxt-link>
					</div>
				</div>
				<div class="menu-item">
					<nuxt-link class="menu-title" to="/mobile/join">品牌加盟</nuxt-link>
				</div>
				<div class="menu-item">
					<nuxt-link class="menu-title" to="">下载APP</nuxt-link>
					<div class="menu-sub">
						<nuxt-link class="menu-sub-item" to="">智能家居</nuxt-link>
						<nuxt-link class="menu-sub-item" to="">慧享家</nuxt-link>
					</div>
				</div>
			</div>
		</div>

		<div :class="[showMenu ? 'main-container-move' : '', 'main-container']">
			<nuxt />

			<footer class="footer">
				<div class="footer-title">
					<img src="~/assets/logo.png" />
				</div>

				<div class="footer-menu">
					<div class="footer-menu-item">
						<div class="footer-menu-item-title" @click="showIem(1)">
							<span>智能门锁</span>
							<span :class="['close', footerItm === 1 && 'open']"></span>
						</div>
						<div class="footer-menu-sub-wrap">
							<transition name="footer-menu-transition">
								<div v-if="footerItm === 1" class="footer-menu-sub">
									<nuxt-link class="footer-menu-sub-item" to="/mobile/m1">M1</nuxt-link>
									<nuxt-link class="footer-menu-sub-item" to="/mobile/p1">P1</nuxt-link>
									<nuxt-link class="footer-menu-sub-item" to="/mobile/t1">T1</nuxt-link>
									<nuxt-link class="footer-menu-sub-item" to="">H1</nuxt-link>
								</div>
							</transition>
						</div>
					</div>
					<div class="footer-menu-item">
						<div class="footer-menu-item-title" @click="showIem(2)">
							<span>关于我们</span>
							<span :class="['close', footerItm === 2 && 'open']"></span>
						</div>
						<div class="footer-menu-sub-wrap">
							<transition name="footer-menu-transition">
								<div v-if="footerItm === 2" class="footer-menu-sub">
									<nuxt-link class="footer-menu-sub-item" to="/mobile/aboutus/company-produce">公司简介</nuxt-link>
									<nuxt-link class="footer-menu-sub-item" to="/mobile/aboutus/brand-history">品牌故事</nuxt-link>
									<nuxt-link class="footer-menu-sub-item" to="/mobile/aboutus/pd-only">专利声明</nuxt-link>
									<nuxt-link class="footer-menu-sub-item" to="/mobile/aboutus/service">售后服务</nuxt-link>
								</div>
							</transition>
						</div>
					</div>
					<div class="footer-menu-item">
						<div class="footer-menu-item-title" @click="showIem(3)">
							<span>品牌加盟</span>
							<span :class="['close', footerItm === 3 && 'open']"></span>
						</div>
						<div class="footer-menu-sub-wrap">
							<transition name="footer-menu-transition">
								<div v-if="footerItm === 3" class="footer-menu-sub">
									<nuxt-link class="footer-menu-sub-item" to="/mobile/join">加盟</nuxt-link>
								</div>
							</transition>
						</div>
					</div>
					<div class="footer-menu-item">
						<div class="footer-menu-item-title" @click="showIem(4)">
							<span>APP下载</span>
							<span :class="['close', footerItm === 4 && 'open']"></span>
						</div>
						<div class="footer-menu-sub-wrap">
							<transition name="footer-menu-transition">
								<div v-if="footerItm === 4" class="footer-menu-sub">
									<nuxt-link class="footer-menu-sub-item" to="">智能家居</nuxt-link>
									<nuxt-link class="footer-menu-sub-item" to="">慧享家</nuxt-link>
								</div>
							</transition>
						</div>
					</div>
				</div>

				<div class="footer-info">
					<span>深圳市几何科技有限公司</span>
					<span>400 858 6766</span>
				</div>
				<div class="footer-copy-right">©2017 PINTOS.ALL right reserved. 粤ICP备171758560号-1</div>
			</footer>
		</div>
	</div>
</template>

<style scoped lang="less">
.main {
	padding-top: 44px;
}

.main-container {
	transform: translateX(0);
	transition: transform 0.3s linear;

	&-move {
		transform: translateX(228px);
		transition: transform 0.3s linear;
	}
}

.navbar {
	display: flex;
	width: 100%;
	height: 44px;
	background: rgba(31, 31, 31, 1);
	padding: 0 16px;
	align-items: center;
	justify-content: center;
	left: 0;
	transition: all 0.3s linear;

	&-move {
		left: 228px;
		transition: all 0.3s linear;
	}

	&-menu-entry {
		position: absolute;
		top: 14px;
		left: 16px;
		width: 18px;
		height: 16px;
		vertical-align: top;

		&-text {
			font-size: 32px;
			color: #fff;
			position: relative;
			left: -4px;
			top: -10px;
		}

		img {
			width: 100%;
			height: 100%;
		}
	}

	&-logo {
		// height: 18px;
		height: 12px;

		img {
			width: 144.5px;
			height: 12px;
			// width: 77px;
			// height: 18px;
			object-fit: cover;
			object-position: center;
		}
	}

	&-buy {
		position: absolute;
		top: 12px;
		right: 16px;
		width: 55px;
		height: 20px;
		vertical-align: top;

		img {
			width: 100%;
			height: 100%;
		}
	}
}

.menu-mask {
	left: 0;
	opacity: 0;
	transition: all 0.3s linear;

	&-show {
		position: fixed;
		top: 0;
		z-index: 29;
		width: 100%;
		height: 100%;
		opacity: 0.7;
		background: rgba(19, 19, 19, 0.51);
		left: 228px;
		transition: all 0.3s linear;
	}

	&-transition {
		&-enter-active,
		&-leave-active {
			transition: opacity 0.3s linear;
		}

		&-enter, &-leave-to /* .fade-leave-active below version 2.1.8 */ {
			opacity: 0;
		}
	}
}

.menu {
	position: fixed;
	top: 0;
	left: -228px;
	z-index: 30;
	width: 228px;
	height: 100%;
	background: rgba(33, 33, 33, 1);
	padding: 13px 0;
	line-height: 1;
	overflow-y: auto;
	transition: all 0.3s linear;

	&-show {
		left: 0;
		transition: all 0.3s linear;
	}

	&-item {
		margin-top: 25px;
	}

	&-title {
		display: block;
		width: 100%;
		padding: 0 42px;
		font-size: 18px;
		font-weight: 400;
		color: rgba(255, 255, 255, 1);
	}

	&-sub {
		padding: 0 60px;
		width: 100%;

		&-item {
			display: block;
			margin-top: 20px;
			font-size: 15px;
			font-weight: 300;
			color: rgba(230, 230, 230, 1);
		}
	}
}

.footer {
	padding: 18px 24px 16px;
	background: rgba(31, 31, 31, 1);
	&-title {
		border-bottom: 1px solid rgba(218, 218, 218, 1);
		padding-bottom: 10px;
		img {
			width: 144.5px;
			height: 12px;
			// width: 60px;
			// height: 14px;
		}
	}
	&-menu {
		border-bottom: 1px solid rgba(218, 218, 218, 1);
		&-item {
			border-bottom: 1px solid rgba(62, 62, 62, 1);
			:last-child {
				border-bottom: none;
			}
			&-title {
				display: flex;
				align-items: center;
				justify-content: space-between;
				padding: 14px 8px 14px 0;
				font-size: 12px;
				color: #ffffff;
				.close {
					display: inline-block;
					width: 12px;
					height: 1px;
					background: #818181;
					transform: rotate(0deg);

					&::after {
						content: "";
						display: block;
						width: 12px;
						height: 1px;
						background: #818181;
						transform: rotate(-90deg);
					}
				}
				.open {
					background: #fff;
					transform: rotate(45deg);
					&::after {
						background: #fff;
					}
				}
			}
		}
		&-sub {
			margin-top: 6px;
			&-wrap {
				overflow: hidden;
			}
			&-item {
				display: block;
				margin-bottom: 18px;
				font-size: 12px;
				color: rgba(115, 115, 115, 1);
			}
		}
	}
	&-info {
		border-bottom: 1px solid rgba(218, 218, 218, 1);
		padding: 16px 0 8px;
		color: rgba(153, 153, 153, 1);
		font-size: 12px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	&-copy-right {
		margin-top: 8px;
		font-size: 12px;
		color: rgba(153, 153, 153, 1);
	}
}
</style>

<script type="text/javascript">
export default {
    layout: "mobile",
    components: {},
    data() {
        return {
            footerItm: 0,
            showMenu: false,
        };
    },
    methods: {
        showIem(i) {
            if (this.footerItm === i) {
                this.footerItm = 0;
                return;
            }
            this.footerItm = i;
        },
        changeShowMenu() {
            this.showMenu = !this.showMenu;
            document.documentElement.style.overflow = this.showMenu ? 'hidden' : '';
            document.body.style.overflow = this.showMenu ? 'hidden' : '';
        },
        clickMenuMask() {
            if (this.showMenu) {
                this.showMenu = false;
                document.documentElement.style.overflow = '';
                document.body.style.overflow = '';
            }
        },
    },
    beforeMount() {
        // auto jump to PC page
        if (!/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
            this.$router.history.push('/');
        }
    },
    mounted() {
        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(
            document.querySelectorAll(".navbar-burger"),
            0
        );

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {
            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener("click", () => {
                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active");
                    $target.classList.toggle("is-active");
                });
            });
        }
    },
    watch: {
        $route(to, from) {
            this.showMenu = false;
            this.footerItm = 0;
            document.documentElement.style.overflow = '';
            document.body.style.overflow = '';
        }
    },
};
</script>
