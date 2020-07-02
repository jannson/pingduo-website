<template>
	<div class="main">
		<div class="sticky-nav">
			<nav class="nav-bar is-fixed-top" role="navigation" aria-label="main navigation">
				<div class="nav-container">
					<nuxt-link to="/" class="navbar-logo">
						<img src="~/assets/logo.png" width="112" height="26" />
					</nuxt-link>

					<div class="navbar-menu">
						<span :class="[activeMenu === 1 ? 'nav-item-active' : '', 'nav-item down-product']" @click="clickMenu(1)">
							<nuxt-link to="/">智能门锁</nuxt-link>
							<div class="product-wrap">
								<div class="product-content">
									<div class="top-lock">
										<nuxt-link to="/m1">
											<div class="product-item">
												<img v-if="currentPath=='/m1'" src="~/assets/index/icon_m1_active.png" alt="">
												<img v-else src="~/assets/index/icon_m1.png" alt="">
												<div class="product-item-text">智能指纹锁 M1</div>
											</div>
										</nuxt-link>
										<nuxt-link to="/p1">
											<div class="product-item">
												<img v-if="currentPath=='/p1'" src="~/assets/index/icon_p1_active.png" alt="">
												<img v-else src="~/assets/index/icon_p1.png" alt="">
												<div class="product-item-text">智能指纹锁 P1</div>
											</div>
										</nuxt-link>
										<nuxt-link to="/t1">
											<div class="product-item">
												<img v-if="currentPath=='/t1'" src="~/assets/index/icon_t1_active.png" alt="">
												<img v-else src="~/assets/index/icon_t1.png" alt="">
												<div class="product-item-text">智能指纹锁 t1</div>
											</div>
										</nuxt-link>
									</div>
								</div>
							</div>
						</span>
						<span :class="[activeMenu === 2 ? 'nav-item-active' : '', 'nav-item']" @click="clickMenu(2)">
							<nuxt-link to="/aboutus/company-produce">关于我们</nuxt-link>
						</span>
						<span :class="[activeMenu === 3 ? 'nav-item-active' : '', 'nav-item']" @click="clickMenu(3)">
							<nuxt-link to="/join">品牌加盟</nuxt-link>
						</span>
						<span :class="[activeMenu === 4 ? 'nav-item-active' : '', 'nav-item down-app']">
							下载APP
							<div class="qrcode-bg"></div>
							<div class="down-qrcode">
								<div class="qrcode-item">
									<img src="~/assets/footer/home.png" alt />
									<div class="qrcode-text">华为-智能家居</div>
								</div>
								<div class="qrcode-item">
									<img src="~/assets/footer/qr-house.png" alt />
									<div class="qrcode-text">慧享家</div>
								</div>
							</div>
						</span>
					</div>

					<div class="navbar-buy">
						<div class="buttons">
							<a class="button online-buy">在线购买</a>
						</div>
					</div>
				</div>
			</nav>
		</div>

		<nuxt />

		<footer class="footer bg-f2">
			<div class="container is-hidden-touch">
				<div class="content columns has-text-lefted">
					<div class="column">
						<div class="title">
							智能门锁
						</div>
						<p>
							<nuxt-link to="/m1">M1</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/p1">P1</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/t1">T1</nuxt-link>
						</p>
						<!-- <p>H1</p> -->
						<!-- <p>配件</p> -->
					</div>
					<div class="column">
						<div class="title">关于我们</div>
						<p>
							<nuxt-link to="/aboutus/company-produce">公司简介</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/aboutus/brand-history">品牌故事</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/aboutus/pd-only">专利声明</nuxt-link>
						</p>
						<p>
							<nuxt-link to="/aboutus/service">售后服务</nuxt-link>
						</p>
					</div>
					<div class="column">
						<div class="title">品牌加盟</div>
						<p>
							<nuxt-link to="/join">加盟</nuxt-link>
						</p>
					</div>
					<div class="column is-4 relative">
						<div class="title">APP下载</div>
						<div class="app-qr">
							<div class="app-item is-inline-block has-text-centered">
								<img class src="~/assets/footer/home.png" alt />
								<div class="app-text">华为-智能家居</div>
							</div>
							<div class="app-item is-inline-block has-text-centered">
								<img class src="~/assets/footer/qr-house.png" alt />
								<div class="app-text">慧享家</div>
							</div>

						</div>
					</div>
					<div class="column has-text-centered">
						<div class="title">关注公众号</div>
						<div class="pd-wechat">
							<img src="~/assets/footer/qr-pd.png" alt />
						</div>
						<div class="wechat-text">PINTOS 服务公众号</div>
					</div>
				</div>
				<div class="tel">400 858 6766</div>
				<div class="copy flex justify-between ">
					<p>©2017 PINTOS.ALL right reserved. 粤ICP备171758560号-1</p>
					<p>深圳市几何科技有限公司</p>
				</div>
			</div>
		</footer>
	</div>
</template>

<script type="text/javascript">
export default {
    layout: "default",
    components: {},
    data() {
        return {
            activeMenu: 1,
            footerItm: 0,
            currentPath: '/',
        };
    },
    watch: {
        '$route'(to, from) {
            this.currentPath = to.path
        }
    },
    methods: {
        showIem(i) {
            if (this.footerItm === i) {
                this.footerItm = 0;
                return;
            }
            this.footerItm = i;
        },
        clickMenu(i) {
            this.activeMenu = i;
        }
    },
    beforeMount() {
        // auto jump to mobile page
        if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(window.navigator.userAgent)) {
            this.$router.history.push('/mobile');
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
    }
};
</script>

<style scoped lang="less">
.main {
	padding-top: 50px;
	min-width: 1200px;
}

.sticky-nav {
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 999;
}

.nav-bar {
	display: flex;
	justify-content: center;
	background: #2c2c2c;
	height: 50px;

	.nav-container {
		height: 100%;
		display: flex;
	}
}

.navbar-logo {
	margin-right: 90px;
	display: flex;
	align-items: center;
	img {
		width: 150px;
		height: 12px;
	}
}

.navbar-menu {
	display: flex;
	align-items: center;

	.nav-item {
		margin-right: 60px;
		font-size: 16px;
		font-weight: bold;
		color: #888888;
		cursor: pointer;
		height: 50px;
		line-height: 50px;

		&:last-child {
			margin-right: 0;
		}

		a {
			color: #888888;
			display: inline-block;
			height: 100%;
			border-bottom: 3px solid transparent;
		}

		&-active,
		&:hover {
			color: #369bfa;

			a {
				color: #369bfa;
			}
		}

		&-active {
			a {
				border-bottom: 3px solid #369bfa;
			}
		}
	}
}

.navbar-buy {
	margin-left: 200px;
	padding: 10px 0;

	& .online-buy {
		margin-bottom: 0;
		width: 100px;
		height: 30px;
		color: #fff;
		border: none;
		background: rgba(54, 155, 250, 1);
		border-radius: 50px;
	}
}

.down-app {
	position: relative;

	.qrcode-bg {
		display: none;
		position: absolute;
		top: 50px;
		left: -2000px;
		right: -2000px;
		background-color: #fff;
		height: 117px;
		box-shadow: 2px 8px 4px 0px rgba(7, 7, 7, 0.2);
	}

	.down-qrcode {
		display: none;
		position: absolute;
		top: 50px;
		left: -56px;
		width: 200px;
		padding-top: 18px;

		.qrcode-item {
			margin-right: 32px;
			display: flex;
			flex-direction: column;
			align-items: center;

			&:last-child {
				margin-right: 0;
			}

			img {
				width: 66px;
				height: 66px;
			}

			.qrcode-text {
				margin-top: 5px;
				font-size: 12px;
				font-weight: 400;
				color: rgba(0, 0, 0, 1);
				line-height: 1;
			}
		}
	}

	&:hover {
		.down-qrcode {
			display: flex;
		}

		.qrcode-bg {
			display: block;
		}
	}
}

.down-product {
	position: relative;
	.product-wrap {
		display: none;
		position: fixed;
		top: 50px;
		left: 0;
		right: 0;
		background-color: #fff;
		height: 117px;
		box-shadow: 2px 8px 4px 0px rgba(7, 7, 7, 0.2);
	}
	.product-content {
		display: none;
		padding-top: 16px;
		justify-content: center;
	}
	.top-lock {
		display: flex;
		width: 500px;
		justify-content: space-between;
		img {
			width: 64px;
			height: 64px;
			object-fit: contain;
			object-position: center;
			vertical-align: top;
		}
		a {
			color: #888 !important;
			border-bottom: none !important;
			height: auto !important;
		}
	}
	.product-item {
		display: flex;
		flex-direction: column;
		align-items: center;
		&-text {
			margin-top: 8px;
			font-size: 12px;
			line-height: 1;
		}
	}

	&:hover {
		.product-wrap {
			display: block;
		}
		.product-content {
			display: flex;
		}
	}
}

.title {
	font-size: 14px;
	font-weight: 400;
	color: rgba(255, 255, 255, 1);
}

.footer {
	color: #fff;
	background: rgba(31, 31, 31, 1);
}

.footer p {
	color: rgba(115, 115, 115, 1);

	a {
		color: rgba(115, 115, 115, 1);
	}
}

.content {
	padding-bottom: 34px;

	.column:last-child {
		flex: none;
		padding-right: 1.5rem;
	}
}

.app-qr {
	.app-item {
		margin-right: 16px;
		width: 104px;

		&:last-child {
			margin-right: 0;
		}
	}

	img {
		vertical-align: top;
		width: 104px;
		height: 104px;
	}

	.app-text {
		text-align: center;
		margin-top: 12px;
		font-size: 12px;
		font-weight: 400;
		color: rgba(115, 115, 115, 1);
	}
}

.pd-wechat img {
	width: 104px;
	height: 104px;
}

.wechat-text {
	margin-top: 12px;
	font-size: 12px;
	font-weight: 400;
	color: rgba(115, 115, 115, 1);
}

.tel {
	margin-bottom: 12px;
	font-size: 18px;
	font-weight: bold;
	color: rgba(115, 115, 115, 1);
	text-align: right;
}

.copy {
	font-size: 14px;
	border-top: 1px solid rgba(62, 62, 62, 1);
	padding-top: 20px;
}
</style>
