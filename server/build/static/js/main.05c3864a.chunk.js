(this.webpackJsonpbooking = this.webpackJsonpbooking || []).push([
	[0],
	{
		133: function (e, t, r) {
			"use strict";
			r.r(t);
			var n = r(1),
				a = r.n(n),
				s = r(24),
				c = r.n(s),
				o = (r(66), r(4)),
				i = (r(67), r(18)),
				l = r(6),
				u = r(53),
				d = r.n(u),
				b = r.p + "static/media/admin.c477c120.svg",
				j = r.p + "static/media/student.6ad307b7.svg",
				p = r.p + "static/media/driver.c696520f.svg",
				f = r(0);
			function h() {
				var e = Object(l.f)();
				return Object(f.jsxs)("div", {
					className: "container",
					children: [
						Object(f.jsx)("div", {
							style: {
								color: "#808080",
								fontFamily: "Staatliches",
								fontSize: "24px",
								marginBottom: "10px",
								marginTop: "30px",
							},
							children: Object(f.jsx)(d.a, {
								text: [
									"Federal Polytechnic Nasarawa",
									"Project By...",
									"Yakubu Abraham",
									"BookBus",
									"Booking Made Easy\ud83d\ude0e\ud83d\ude0e",
								],
								speed: 50,
								eraseDelay: 2e3,
							}),
						}),
						Object(f.jsx)("p", {
							style: {
								fontFamily: "flamenco",
								fontSize: "24px",
								fontWeight: "bolder",
								margin: "15px",
							},
							className: "login-as",
							children: "Login As",
						}),
						Object(f.jsxs)("div", {
							className: "home",
							children: [
								Object(f.jsxs)("div", {
									className: "home-div",
									onClick: function () {
										return e.push("/user");
									},
									children: [
										Object(f.jsx)("h3", {
											style: { margin: 0, marginBottom: "10px" },
											children: "Student",
										}),
										Object(f.jsx)("img", {
											src: j,
											alt: "Student",
											style: {
												height: "7rem",
												border: "none",
												outline: "none",
											},
										}),
									],
								}),
								Object(f.jsxs)("div", {
									className: "home-div",
									onClick: function () {
										return e.push("/driver");
									},
									children: [
										Object(f.jsx)("h3", {
											style: { margin: 0, marginBottom: "10px" },
											children: "Driver",
										}),
										Object(f.jsx)("img", {
											src: p,
											alt: "Driver",
											style: {
												height: "7rem",
												border: "none",
												colorAdjust: "#000",
												outline: "none",
											},
										}),
									],
								}),
								Object(f.jsxs)("div", {
									className: "home-div",
									onClick: function () {
										return e.push("/admin");
									},
									children: [
										Object(f.jsx)("h3", {
											style: { margin: 0, marginBottom: "10px" },
											children: "Admin",
										}),
										Object(f.jsx)("img", {
											src: b,
											alt: "Admin",
											style: {
												height: "7rem",
												border: "none",
												colorAdjust: "#000",
												outline: "none",
											},
										}),
									],
								}),
							],
						}),
					],
				});
			}
			var m = r(5),
				x = r.n(m),
				g = r(7),
				O = r(2),
				v =
					(r(35),
					function (e) {
						var t = e.name,
							r = e.matric,
							a = e.email,
							s = e.password,
							c = e.setName,
							i = e.setEmail,
							l = e.setMatric,
							u = e.setPassword,
							d = e.signUp,
							b = e.isSignUpEmpty,
							j = e.toast,
							p = Object(n.useState)(""),
							h = Object(o.a)(p, 2),
							m = h[0],
							x = h[1];
						return Object(f.jsxs)(f.Fragment, {
							children: [
								Object(f.jsx)("input", {
									type: "text",
									className: "input",
									value: t,
									onChange: function (e) {
										return c(e.target.value);
									},
									placeholder: "Name",
								}),
								Object(f.jsx)("input", {
									type: "text",
									className: "input",
									value: r,
									onChange: function (e) {
										return l(e.target.value);
									},
									placeholder: "Matric Number",
								}),
								Object(f.jsx)("input", {
									type: "email",
									className: "input",
									value: a,
									onChange: function (e) {
										return i(e.target.value);
									},
									placeholder: "Email",
								}),
								Object(f.jsx)("input", {
									type: "password",
									className: "input",
									value: s,
									onChange: function (e) {
										return u(e.target.value);
									},
									placeholder: "Password",
								}),
								Object(f.jsx)("input", {
									type: "password",
									className: "input",
									value: m,
									onChange: function (e) {
										return x(e.target.value);
									},
									placeholder: "Confirm Password",
									required: !0,
								}),
								Object(f.jsx)("button", {
									className: "button login-btn",
									onClick: function () {
										return s === m ? d() : j.error("Password doesn't match");
									},
									style: { opacity: b ? "0.6" : "1" },
									children: "Sign Up",
								}),
							],
						});
					}),
				y = function (e) {
					var t = e.id,
						r = e.password,
						n = e.setId,
						a = e.setPassword,
						s = e.login,
						c = e.isLoginEmpty;
					return Object(f.jsxs)(f.Fragment, {
						children: [
							Object(f.jsx)("input", {
								type: "text",
								className: "input",
								value: t,
								onChange: function (e) {
									return n(e.target.value);
								},
								placeholder: "Email or Matric No",
								required: !0,
							}),
							Object(f.jsx)("input", {
								type: "password",
								className: "input",
								value: r,
								onChange: function (e) {
									return a(e.target.value);
								},
								placeholder: "Password",
								required: !0,
							}),
							Object(f.jsx)("button", {
								className: "button login-btn",
								onClick: s,
								style: { opacity: c ? "0.6" : "1" },
								children: "Login",
							}),
						],
					});
				},
				k = r(14),
				S = r.n(k),
				w = function (e, t, r) {
					var n;
					return (function () {
						var a = Object(g.a)(
							x.a.mark(function a() {
								var s, c, o, i;
								return x.a.wrap(
									function (a) {
										for (;;)
											switch ((a.prev = a.next)) {
												case 0:
													if (!t.auth) {
														a.next = 11;
														break;
													}
													(a.t0 = t.type),
														(a.next =
															"user" === a.t0
																? 4
																: "driver" === a.t0
																? 6
																: "admin" === a.t0
																? 8
																: 10);
													break;
												case 4:
													return (
														(n = localStorage.getItem("token")),
														a.abrupt("break", 11)
													);
												case 6:
													return (
														(n = localStorage.getItem("driverToken")),
														a.abrupt("break", 11)
													);
												case 8:
													return (
														(n = localStorage.getItem("adminToken")),
														a.abrupt("break", 11)
													);
												case 10:
													n = "";
												case 11:
													(a.t1 = e.method),
														(a.next =
															"post" === a.t1 ? 14 : "get" === a.t1 ? 29 : 43);
													break;
												case 14:
													return (
														(a.prev = 14),
														r(!0),
														(a.next = 18),
														S.a.post(
															e.url,
															e.body,
															t.auth
																? {
																		headers: {
																			Authorization: "Bearer ".concat(n),
																		},
																  }
																: null
														)
													);
												case 18:
													return (
														(s = a.sent),
														r(!1),
														a.abrupt("return", {
															data: s.data,
															status: s.status,
														})
													);
												case 23:
													throw (
														((a.prev = 23),
														(a.t2 = a.catch(14)),
														r(!1),
														(c = a.t2.message.split(" ")[5]),
														new Error(c))
													);
												case 28:
													return a.abrupt("break", 44);
												case 29:
													return (
														(a.prev = 29),
														r(!0),
														(a.next = 33),
														S.a.get(
															e.url,
															t.auth
																? {
																		headers: {
																			Authorization: "Bearer ".concat(n),
																		},
																  }
																: null
														)
													);
												case 33:
													return (
														(o = a.sent),
														r(!1),
														a.abrupt("return", {
															data: o.data,
															status: o.status,
														})
													);
												case 38:
													throw (
														((a.prev = 38),
														(a.t3 = a.catch(29)),
														r(!1),
														(i = a.t3.message.split(" ")[5]),
														new Error(+i))
													);
												case 43:
													return a.abrupt("return", null);
												case 44:
												case "end":
													return a.stop();
											}
									},
									a,
									null,
									[
										[14, 23],
										[29, 38],
									]
								);
							})
						);
						return function () {
							return a.apply(this, arguments);
						};
					})();
				};
			function N(e) {
				var t = e.loading,
					r = Object(n.useState)(""),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(n.useState)(""),
					u = Object(o.a)(i, 2),
					d = u[0],
					b = u[1],
					j = Object(n.useState)(""),
					p = Object(o.a)(j, 2),
					h = p[0],
					m = p[1],
					k = Object(n.useState)(""),
					S = Object(o.a)(k, 2),
					N = S[0],
					C = S[1],
					I = Object(n.useState)(""),
					B = Object(o.a)(I, 2),
					D = B[0],
					F = B[1],
					T = Object(n.useState)(!0),
					_ = Object(o.a)(T, 2),
					z = _[0],
					A = _[1],
					E = Object(n.useState)(!0),
					L = Object(o.a)(E, 2),
					P = L[0],
					W = L[1],
					R = Object(n.useState)(!0),
					J = Object(o.a)(R, 2),
					U = J[0],
					q = J[1],
					M = Object(l.f)();
				Object(n.useEffect)(
					function () {
						W("" === s || "" === d);
					},
					[s, d]
				),
					Object(n.useEffect)(
						function () {
							q("" === h || "" === d || "" === D || "" === N);
						},
						[h, D, N, d]
					),
					Object(n.useEffect)(
						function () {
							localStorage.getItem("token") && M.push("/user/dashboard");
						},
						[M]
					);
				var H = w(
						{
							url: "https://bookbus.herokuapp.com/user/login",
							method: "post",
							body: { id: s, password: d },
						},
						{ auth: !1 },
						t
					),
					V = (function () {
						var e = Object(g.a)(
							x.a.mark(function e() {
								var t;
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if (!P) {
														e.next = 2;
														break;
													}
													return e.abrupt("return");
												case 2:
													return (e.prev = 2), (e.next = 5), H();
												case 5:
													200 === (t = e.sent).status &&
														(O.b.success("Logged in successfully!!", {
															autoClose: 1e3,
														}),
														localStorage.setItem("token", t.data),
														M.push("/user/dashboard")),
														(e.next = 17);
													break;
												case 9:
													(e.prev = 9),
														(e.t0 = e.catch(2)),
														(e.t1 = e.t0.message),
														(e.next = "400" === e.t1 ? 14 : 16);
													break;
												case 14:
													return (
														O.b.error("Invalid Login Details", {
															position: "top-right",
															autoClose: 3e3,
															hideProgressBar: "false",
														}),
														e.abrupt("break", 17)
													);
												case 16:
													O.b.error("Something went wrong");
												case 17:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[2, 9]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})(),
					Y = w(
						{
							url: "https://bookbus.herokuapp.com/user/register",
							method: "post",
							body: { name: h, email: D, password: d, matric_number: N },
						},
						{ auth: !1 },
						t
					),
					K = (function () {
						var e = Object(g.a)(
							x.a.mark(function e() {
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if (!U) {
														e.next = 2;
														break;
													}
													return e.abrupt("return");
												case 2:
													return (e.prev = 2), (e.next = 5), Y();
												case 5:
													201 === e.sent.status &&
														(O.b.success("Account created Successfully", {
															autoClose: 1e3,
														}),
														A(!0)),
														(e.next = 17);
													break;
												case 9:
													(e.prev = 9),
														(e.t0 = e.catch(2)),
														(e.t1 = e.t0.message),
														(e.next = "400" === e.t1 ? 14 : 16);
													break;
												case 14:
													return (
														O.b.error("User already exist", {
															position: "top-right",
															autoClose: 3e3,
															hideProgressBar: "false",
														}),
														e.abrupt("break", 17)
													);
												case 16:
													O.b.error("Something went wrong");
												case 17:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[2, 9]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})();
				return Object(f.jsxs)(f.Fragment, {
					children: [
						Object(f.jsx)(O.a, {}),
						Object(f.jsx)("div", {
							className: "container",
							style: {},
							children: Object(f.jsxs)("div", {
								style: { width: "100%" },
								children: [
									Object(f.jsx)("h3", {
										style: {
											color: "#444",
											fontFamily: "Buenard",
											fontSize: "24px",
											fontWeight: "lighter",
										},
										children: z ? "Login" : "Sign Up",
									}),
									Object(f.jsxs)("form", {
										style: {
											display: "flex",
											flexDirection: "column",
											alignItems: "center",
											justifyContent: "center",
											background: "#fff",
											padding: "20px",
											paddingTop: 0,
											alignSelf: "center",
											borderRadius: "5px",
											margin: "auto",
										},
										children: [
											Object(f.jsxs)("div", {
												style: {
													display: "flex",
													flexDirection: "row",
													justifyContent: "space-between",
													width: "auto",
													alignSelf: "flex-end",
													marginTop: 0,
													marginBottom: "10px",
													background: "#f4f4f4",
													height: "fit-content",
													padding: 0,
												},
												children: [
													Object(f.jsx)("button", {
														className: "button user-login",
														style: {
															borderTopStyle: z ? "solid" : "none",
															borderWidth: "3px",
															borderColor: "#50c878",
															background: z ? "#fff" : "#f4f4f4 ",
															opacity: z ? "1" : "0.5",
														},
														onClick: function () {
															return A(!0);
														},
														children: "Login",
													}),
													Object(f.jsx)("button", {
														className: "button user-login",
														onClick: function () {
															return A(!1);
														},
														style: {
															borderTopStyle: z ? "none" : "solid",
															borderWidth: "3px",
															borderColor: "#50c878",
															background: z ? "#f4f4f4 " : "#fff",
															opacity: z ? "0.5" : "1",
														},
														children: "Sign Up",
													}),
												],
											}),
											z
												? Object(f.jsx)(y, {
														id: s,
														password: d,
														setId: c,
														setPassword: b,
														login: V,
														isLoginEmpty: P,
												  })
												: Object(f.jsx)(v, {
														name: h,
														matric: N,
														password: d,
														email: D,
														setName: m,
														setEmail: F,
														setMatric: C,
														setPassword: b,
														signUp: K,
														isSignUpEmpty: U,
														toast: O.b,
												  }),
										],
									}),
								],
							}),
						}),
					],
				});
			}
			var C = r(15),
				I = r(16),
				B = r.p + "static/media/signin.c94a6b0c.svg",
				D = r(11),
				F = r.n(D),
				T = r.p + "static/media/profile.a8d98262.svg";
			function _(e) {
				var t = e.setShowNavbar,
					r = e.fundWallet,
					n = (e.showNavbar, Object(l.f)()),
					a = localStorage.getItem("data")
						? JSON.parse(localStorage.getItem("data"))
						: "",
					s = a.name,
					c = a.matric_number,
					o = a.email;
				return Object(f.jsxs)(f.Fragment, {
					children: [
						Object(f.jsxs)("div", {
							style: {
								borderStyle: "dashed",
								padding: "10px",
								borderWidth: "5px",
								borderColor: "#fff",
							},
							children: [
								Object(f.jsx)("img", {
									src: T,
									alt: "Profile",
									style: { height: "7rem", border: "none", outline: "none" },
								}),
								Object(f.jsxs)("div", {
									style: {
										color: "#fff",
										fontSize: "20px",
										fontFamily: "Arapey",
									},
									children: [
										Object(f.jsxs)("div", { children: ["Name: ", s] }),
										Object(f.jsxs)("div", { children: ["Email: ", o] }),
										Object(f.jsxs)("div", { children: ["Matric Number: ", c] }),
									],
								}),
							],
						}),
						Object(f.jsxs)("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								paddingBottom: "20px",
							},
							children: [
								Object(f.jsx)("button", {
									className: "button green",
									onClick: function () {
										return r();
									},
									children: "Fund Wallet",
								}),
								Object(f.jsx)("button", {
									className: "button red",
									onClick: function () {
										F.a
											.fire({
												title: "Do you want to Logout?",
												showCancelButton: !0,
												confirmButtonText: "Yes",
											})
											.then(function (e) {
												e.isConfirmed &&
													(t(!1),
													n.push("/"),
													localStorage.clear(),
													window.location.reload());
											});
									},
									children: "Logout",
								}),
							],
						}),
					],
				});
			}
			function z(e) {
				var t = e.setShowNavbar,
					r = (e.showNavbar, localStorage.getItem("busId")),
					n = Object(l.f)();
				return Object(f.jsxs)(f.Fragment, {
					children: [
						Object(f.jsxs)("div", {
							style: {
								borderStyle: "dashed",
								padding: "10px",
								borderWidth: "5px",
								borderColor: "#fff",
							},
							children: [
								Object(f.jsx)("img", {
									src: T,
									alt: "Profile",
									style: { height: "7rem", border: "none", outline: "none" },
								}),
								Object(f.jsx)("div", {
									style: {
										color: "#fff",
										fontSize: "20px",
										fontFamily: "Arapey",
									},
									children: Object(f.jsxs)("div", {
										children: ["Bus Number: 0", r],
									}),
								}),
							],
						}),
						Object(f.jsx)("div", {
							style: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								paddingBottom: "20px",
							},
							children: Object(f.jsx)("button", {
								className: "button red",
								onClick: function () {
									F.a
										.fire({
											title: "Do you want to Logout?",
											showCancelButton: !0,
											confirmButtonText: "Yes",
										})
										.then(function (e) {
											e.isConfirmed &&
												(t(!1),
												n.push("/"),
												localStorage.clear(),
												window.location.reload());
										});
								},
								children: "Logout",
							}),
						}),
					],
				});
			}
			var A = function (e) {
				var t = e.showNavbar,
					r = e.setShowNavbar,
					n = e.fundWallet;
				return Object(f.jsx)("div", {
					style: {
						position: "absolute",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						background: "rgb(38, 46, 59)",
						top: 0,
						zIndex: "44",
						right: "0",
						width: "100%",
					},
					className: t ? "show-nav" : "hide-nav",
					children: localStorage.getItem("token")
						? Object(f.jsx)(f.Fragment, {
								children: Object(f.jsx)(_, {
									setShowNavbar: r,
									showNavbar: t,
									fundWallet: n,
								}),
						  })
						: localStorage.getItem("driverToken")
						? Object(f.jsx)(z, { setShowNavbar: r, showNavbar: t })
						: Object(f.jsx)(f.Fragment, {
								children: Object(f.jsxs)("div", {
									style: { marginTop: "-40px" },
									children: [
										Object(f.jsx)("img", {
											src: B,
											alt: "Sign In",
											className: "nav-image",
											style: {
												border: "none",
												outline: "none",
												alignSelf: "center",
											},
										}),
										Object(f.jsx)("div", {
											style: {
												color: "#fff",
												margin: "10px",
												fontSize: "20px",
											},
											children: "Sign Up or Login to get started",
										}),
										Object(f.jsx)("button", {
											className: "button red",
											style: { marginBottom: "20px" },
											onClick: function () {
												return r(!1);
											},
											children: "Get Started",
										}),
									],
								}),
						  }),
				});
			};
			function E(e) {
				var t = e.setShowNavbar,
					r = e.showNavbar,
					n = e.wallet,
					a = e.fundWallet;
				return Object(f.jsxs)(f.Fragment, {
					children: [
						Object(f.jsxs)("header", {
							children: [
								Object(f.jsx)("div", {
									style: {
										position: "absolute",
										height: "100%",
										width: "100vw",
										backgroundColor: "#50c878",
										display: "flex",
										alignItems: "center",
										justifyContent: "flex-end",
									},
									children: localStorage.getItem("token")
										? Object(f.jsx)(f.Fragment, {
												children: Object(f.jsxs)("div", {
													style: {
														color: "#fff",
														fontFamily: "arapey",
														marginRight: "10px",
														fontSize: "20px",
														fontWeight: "600",
													},
													children: ["\u20a6", n],
												}),
										  })
										: null,
								}),
								Object(f.jsx)("button", {
									onClick: function () {
										return t(!r);
									},
									style: {
										background: "none",
										border: "none",
										outline: "none",
										marginLeft: "20px",
										zIndex: "47",
									},
									className: "nav-icon",
									children: r
										? Object(f.jsx)(C.a, { icon: I.c, size: "2x", style: {} })
										: Object(f.jsx)(C.a, { icon: I.a, size: "2x", style: {} }),
								}),
							],
						}),
						Object(f.jsx)(A, {
							showNavbar: r,
							setShowNavbar: t,
							fundWallet: a,
						}),
					],
				});
			}
			var L = r(56),
				P = r.n(L);
			function W() {
				return Object(f.jsx)(f.Fragment, {
					children: Object(f.jsx)("div", {
						className: "loader",
						children: Object(f.jsx)(P.a, {
							type: "TailSpin",
							color: "#007fff",
							height: 50,
						}),
					}),
				});
			}
			var R = r(26),
				J = r(57),
				U = r.n(J);
			function q() {
				var e = JSON.parse(localStorage.getItem("ticket")),
					t = JSON.parse(localStorage.getItem("data"));
				return Object(f.jsx)("div", {
					className: "container",
					children: Object(f.jsxs)("div", {
						style: {
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							justifyContent: "space-between",
							fontFamily: "Arapey",
							fontSize: "18px",
							background: "#fff",
							padding: "20px",
							height: "60vh",
							color: "#666",
						},
						className: "ticket",
						children: [
							Object(f.jsx)("div", {
								style: { fontSize: "22px", fontWeight: "bold" },
								children: "Ticket",
							}),
							Object(f.jsxs)("div", { children: ["Name: ", t.name] }),
							Object(f.jsxs)("div", {
								children: ["Matric Number: ", t.matric_number],
							}),
							Object(f.jsxs)("div", { children: ["Ticket ID: ", e.code] }),
							Object(f.jsxs)("div", { children: ["Bus ID: ", e.bus_id] }),
							Object(f.jsxs)("div", { children: ["Seat: ", e.seat] }),
							Object(f.jsxs)("div", {
								children: ["Destination: ", e.destination],
							}),
							Object(f.jsxs)("div", {
								children: ["Departure Time: ", e.departure_time],
							}),
							e.code ? Object(f.jsx)(U.a, { value: e.code }) : null,
						],
					}),
				});
			}
			var M = r.p + "static/media/pay.e333a550.svg",
				H = r(17),
				V = r.n(H),
				Y = r(27),
				K = r.n(Y),
				G = r(28),
				Q = r.n(G),
				X = localStorage.getItem("data")
					? JSON.parse(localStorage.getItem("data"))
					: "",
				Z =
					(new Date().getTime().toString(),
					X.email,
					function (e) {
						var t = e.handleChange,
							r = e.loading,
							n = function (e) {
								return (
									V.a.extend(K.a),
									V.a.extend(Q.a),
									V()(e).tz("Africa/Lagos").format("hh:mm A")
								);
							},
							a = (Object(l.f)(), localStorage.getItem("token")),
							s = localStorage.getItem("data")
								? JSON.parse(localStorage.getItem("data"))
								: "",
							c = {
								reference: new Date().getTime().toString(),
								email: s.email,
								amount: 5e3,
								publicKey: "pk_test_0a4093b99f32878ae511ab0f19d32710c16702f8",
							},
							o = function (e) {
								(function () {
									var a = Object(g.a)(
										x.a.mark(function a() {
											var s;
											return x.a.wrap(
												function (a) {
													for (;;)
														switch ((a.prev = a.next)) {
															case 0:
																return (
																	(a.prev = 0),
																	r(!0),
																	(a.next = 4),
																	S.a.post(
																		"https://bookbus.herokuapp.com/user/book/".concat(
																			localStorage.getItem("bus_id")
																		),
																		{
																			chargeType: "bank",
																			reference_id: e.reference,
																		},
																		{
																			headers: {
																				Authorization: "Bearer ".concat(
																					localStorage.getItem("token")
																				),
																			},
																		}
																	)
																);
															case 4:
																(s = a.sent),
																	localStorage.setItem(
																		"ticket",
																		JSON.stringify({
																			bus_id: s.data.bus_id,
																			code: s.data.code,
																			seat: s.data.seat,
																			destination: s.data.destination,
																			departure_time: n(s.data.departure_time),
																		})
																	),
																	r(!1),
																	t("ticket"),
																	(a.next = 14);
																break;
															case 10:
																(a.prev = 10),
																	(a.t0 = a.catch(0)),
																	r(!1),
																	O.b.error("An error occured");
															case 14:
															case "end":
																return a.stop();
														}
												},
												a,
												null,
												[[0, 10]]
											);
										})
									);
									return function () {
										return a.apply(this, arguments);
									};
								})()();
							},
							i = function () {},
							u = Object(R.a)(c);
						return Object(f.jsxs)("div", {
							style: {
								background: "#fff",
								padding: "20px",
								borderRadius: "10px",
							},
							className: "pay-div",
							children: [
								Object(f.jsx)("img", {
									src: M,
									alt: "pay",
									style: { height: "7rem", border: "none", outline: "none" },
								}),
								Object(f.jsx)("p", {
									style: { fontFamily: "flamenco", fontSize: "20px" },
									children: "Pay from?",
								}),
								Object(f.jsxs)("div", {
									style: ee,
									children: [
										Object(f.jsx)("button", {
											className: "button book",
											onClick: function () {
												u(o, i);
											},
											children: "Bank",
										}),
										Object(f.jsx)("button", {
											className: "button book",
											onClick: function () {
												return F.a
													.fire({
														text: "You will be charged #50 from your wallet",
														showCancelButton: !0,
														focusConfirm: !1,
														confirmButtonText: "Confirm",
													})
													.then(
														(function () {
															var e = Object(g.a)(
																x.a.mark(function e(s) {
																	var c, o;
																	return x.a.wrap(
																		function (e) {
																			for (;;)
																				switch ((e.prev = e.next)) {
																					case 0:
																						if (!s.isConfirmed) {
																							e.next = 23;
																							break;
																						}
																						return (
																							r(!0),
																							(e.prev = 2),
																							(e.next = 5),
																							S.a.post(
																								"https://bookbus.herokuapp.com/user/book/".concat(
																									localStorage.getItem("bus_id")
																								),
																								{ chargeType: "wallet" },
																								{
																									headers: {
																										Authorization:
																											"Bearer ".concat(a),
																									},
																								}
																							)
																						);
																					case 5:
																						(c = e.sent),
																							r(!1),
																							localStorage.removeItem("bus_id"),
																							localStorage.setItem(
																								"ticket",
																								JSON.stringify({
																									bus_id: c.data.bus_id,
																									code: c.data.code,
																									seat: c.data.seat,
																									destination:
																										c.data.destination,
																									departure_time: n(
																										c.data.departure_time
																									),
																								})
																							),
																							O.b.success("Payment Successful"),
																							t("ticket"),
																							(e.next = 23);
																						break;
																					case 13:
																						(e.prev = 13),
																							(e.t0 = e.catch(2)),
																							r(!1),
																							(o = e.t0.message.split(" ")[5]),
																							(e.t1 = o),
																							(e.next =
																								"406" === e.t1 ? 20 : 22);
																						break;
																					case 20:
																						return (
																							O.b.error("Insufficient funds"),
																							e.abrupt("break", 23)
																						);
																					case 22:
																						O.b.error("Network Error");
																					case 23:
																					case "end":
																						return e.stop();
																				}
																		},
																		e,
																		null,
																		[[2, 13]]
																	);
																})
															);
															return function (t) {
																return e.apply(this, arguments);
															};
														})()
													);
											},
											children: "Wallet",
										}),
									],
								}),
							],
						});
					});
			function $(e) {
				var t = e.loading,
					r = Object(n.useState)("default"),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(l.f)();
				return (
					Object(n.useEffect)(
						function () {
							localStorage.getItem("bus_id") || i.push("/user/dashboard");
						},
						[i]
					),
					Object(f.jsxs)("div", {
						className: "container",
						children: [
							Object(f.jsx)(O.a, {}),
							"default" === s
								? Object(f.jsx)(Z, {
										handleChange: function (e) {
											c(e);
										},
										loading: t,
								  })
								: Object(f.jsx)(q, {}),
						],
					})
				);
			}
			var ee = {
				display: "flex",
				flexDirection: "column",
				width: "100%",
				alignItems: "center",
				justifyContent: "center",
			};
			function te(e) {
				var t = e.loading,
					r = Object(n.useState)(""),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(n.useState)(""),
					u = Object(o.a)(i, 2),
					d = u[0],
					b = u[1],
					j = Object(n.useState)(!0),
					p = Object(o.a)(j, 2),
					h = p[0],
					m = p[1],
					v = Object(l.f)();
				Object(n.useEffect)(
					function () {
						m("" === s || "" === d);
					},
					[s, d]
				);
				var y = w(
						{
							url: "https://bookbus.herokuapp.com/bus/driver/login",
							method: "post",
							body: { username: s, password: d },
						},
						{ auth: !1 },
						t
					),
					k = (function () {
						var e = Object(g.a)(
							x.a.mark(function e() {
								var t;
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if (!h) {
														e.next = 2;
														break;
													}
													return e.abrupt("return");
												case 2:
													return (e.prev = 2), (e.next = 5), y();
												case 5:
													200 === (t = e.sent).status &&
														(localStorage.setItem("driverToken", t.data.token),
														localStorage.setItem("busId", t.data.bus_id),
														v.push("/driver/dashboard"),
														O.b.success("Logged in successfully!!", {
															autoClose: 1e3,
														})),
														(e.next = 17);
													break;
												case 9:
													(e.prev = 9),
														(e.t0 = e.catch(2)),
														(e.t1 = e.t0.message),
														(e.next = "400" === e.t1 ? 14 : 16);
													break;
												case 14:
													return (
														O.b.error("Invalid Login Details", {
															position: "top-right",
															autoClose: 3e3,
															hideProgressBar: "false",
														}),
														e.abrupt("break", 17)
													);
												case 16:
													O.b.error("Something went wrong");
												case 17:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[2, 9]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})();
				return (
					Object(n.useEffect)(
						function () {
							localStorage.getItem("driverToken") &&
								v.push("/driver/dashboard");
						},
						[v]
					),
					Object(f.jsxs)("div", {
						className: "container",
						children: [
							Object(f.jsx)(O.a, {}),
							Object(f.jsxs)("form", {
								style: {
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									background: "#fff",
									padding: "20px",
									alignSelf: "center",
									borderRadius: "5px",
									margin: "auto",
								},
								children: [
									Object(f.jsx)("div", {
										style: {
											fontSize: "25px",
											color: "#444",
											fontFamily: "Arapey",
											marginBottom: "5px",
										},
										children: "Login",
									}),
									Object(f.jsx)("input", {
										type: "text",
										className: "input",
										value: s,
										onChange: function (e) {
											return (t = e.target.value), void c(t);
											var t;
										},
										placeholder: "Username",
										required: !0,
									}),
									Object(f.jsx)("input", {
										type: "password",
										className: "input",
										value: d,
										onChange: function (e) {
											return (t = e.target.value), void b(t);
											var t;
										},
										placeholder: "password",
										required: !0,
									}),
									Object(f.jsx)("button", {
										className: "button login-btn",
										onClick: function () {
											return k();
										},
										style: { opacity: h ? "0.6" : "1" },
										children: "Login",
									}),
								],
							}),
						],
					})
				);
			}
			r(51), r(52);
			var re = r(58),
				ne = r.n(re);
			function ae(e) {
				var t = e.loading,
					r = Object(n.useState)(""),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(n.useState)(!1),
					l = Object(o.a)(i, 2),
					u = l[0],
					d = l[1],
					b = localStorage.getItem("driverToken");
				var j = (function () {
					var e = Object(g.a)(
						x.a.mark(function e(r) {
							var n, a;
							return x.a.wrap(
								function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												return (
													t(!0),
													(e.prev = 1),
													(e.next = 4),
													S.a.get(
														"https://bookbus.herokuapp.com/bus/ticket/verify/".concat(
															r
														),
														{ headers: { Authorization: "Bearer ".concat(b) } }
													)
												);
											case 4:
												200 === (n = e.sent).status &&
													(t(!1),
													F.a
														.fire({
															title: "<strong>Verified</strong>",
															icon: "success",
															html: "\n\t\t\t\t<div>Matric Number: "
																.concat(
																	n.data.matric_number,
																	"</div>\n\t\t\t\t<div>Ticket ID: "
																)
																.concat(
																	n.data.code,
																	"</div>\n\t\t\t\t\n\t\t\t\t<div>Seat: "
																)
																.concat(
																	n.data.seat,
																	"</div>\n\t\t\t\t<div>Destination: "
																)
																.concat(
																	n.data.destination,
																	"</div>\n\t\t\t\t<div>Departure Time: "
																)
																.concat(n.data.departure_time, "</div>"),
															showCloseButton: !1,
															showCancelButton: !0,
														})
														.then(function (e) {
															e.isConfirmed && d(!1);
														})),
													(e.next = 18);
												break;
											case 8:
												(e.prev = 8),
													(e.t0 = e.catch(1)),
													t(!1),
													(a = e.t0.message.split(" ")[5]),
													(e.t1 = a),
													(e.next = "404" === e.t1 ? 15 : 17);
												break;
											case 15:
												return (
													O.b.error("Ticket Not Valid", {
														position: "top-right",
														autoClose: 3e3,
														hideProgressBar: "false",
													}),
													e.abrupt("break", 18)
												);
											case 17:
												O.b.error("Network Error");
											case 18:
											case "end":
												return e.stop();
										}
								},
								e,
								null,
								[[1, 8]]
							);
						})
					);
					return function (t) {
						return e.apply(this, arguments);
					};
				})();
				return Object(f.jsxs)("div", {
					className: "container",
					children: [
						Object(f.jsx)(O.a, {}),
						u
							? Object(f.jsx)(f.Fragment, {
									children: Object(f.jsx)(ne.a, {
										delay: 500,
										style: { height: 240, width: 320 },
										onError: function (e) {
											console.error(e);
										},
										onScan: function (e) {
											e && j(e);
										},
									}),
							  })
							: Object(f.jsxs)("div", {
									className: "home-div",
									children: [
										Object(f.jsx)("div", {
											style: {
												fontSize: "22px",
												fontFamily: "Flamenco",
												color: "#444",
												marginBottom: "10px",
												fontWeight: "bold",
											},
											children: "Verify Ticket",
										}),
										Object(f.jsx)("input", {
											type: "text",
											maxLength: "4",
											value: s,
											onChange: function (e) {
												return (t = e.target.value), void c(t);
												var t;
											},
											className: "input",
											placeholder: "Enter Ticket ID",
										}),
										Object(f.jsx)("button", {
											className: "input button green",
											onClick: function () {
												return j(s);
											},
											children: "Verify",
										}),
										Object(f.jsx)("div", {
											style: {
												fontSize: "25px",
												marginTop: "16px",
												fontWeight: "bold",
												color: "#444",
											},
											children: "Or",
										}),
										Object(f.jsx)("button", {
											className: "button green",
											onClick: function () {
												return d(!0);
											},
											children: "Scan",
										}),
									],
							  }),
					],
				});
			}
			function se(e) {
				var t = e.loading,
					r = Object(n.useState)(!1),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(l.f)();
				return Object(f.jsx)("div", {
					className: "container",
					children: s
						? Object(f.jsx)(ae, { loading: t })
						: Object(f.jsxs)("div", {
								className: "dashboard-div",
								children: [
									Object(f.jsx)("button", {
										className: "input button green",
										onClick: function () {
											return c(!0);
										},
										children: "Verify Ticket",
									}),
									Object(f.jsx)("button", {
										className: "input button green",
										onClick: function () {
											return i.push("/driver/newtrip");
										},
										children: "Create New Trip",
									}),
								],
						  }),
				});
			}
			var ce = r(60),
				oe = r.n(ce),
				ie = r(61),
				le = r.n(ie);
			function ue(e) {
				var t = e.loading,
					r = Object(n.useState)(new Date(Date.now())),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(n.useState)("Hostel"),
					u = Object(o.a)(i, 2),
					d = u[0],
					b = u[1],
					j = Object(l.f)(),
					p = Object(n.useCallback)(function (e) {
						var t = e.label;
						b(function (e) {
							return t;
						});
					}, []),
					h = w(
						{
							url: "https://bookbus.herokuapp.com/bus/driver/status",
							method: "post",
							body: { destination: d, departure_time: s },
						},
						{ auth: !0, type: "driver" },
						t
					),
					m = Object(n.useCallback)(
						Object(g.a)(
							x.a.mark(function e() {
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.prev = 0), (e.next = 3), h();
												case 3:
													201 === e.sent.status &&
														O.b.success("Trip Created Successfully"),
														(e.next = 19);
													break;
												case 7:
													(e.prev = 7),
														(e.t0 = e.catch(0)),
														(e.t1 = e.t0.message),
														(e.next =
															"400" === e.t1 ? 12 : "401" === e.t1 ? 14 : 18);
													break;
												case 12:
													return (
														O.b.error("You have an active trip", {
															position: "top-right",
															autoClose: 3e3,
															hideProgressBar: "false",
														}),
														e.abrupt("break", 19)
													);
												case 14:
													return (
														O.b.error("Session Expired"),
														j.push("/driver"),
														localStorage.clear(),
														e.abrupt("break", 19)
													);
												case 18:
													O.b.error("An error occured");
												case 19:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[0, 7]]
								);
							})
						),
						[j, h]
					);
				return (
					Object(n.useEffect)(
						function () {
							("" !== d && "" !== s) || O.b.error("Fill out all fields");
						},
						[m, s, d]
					),
					Object(f.jsxs)("div", {
						className: "container",
						children: [
							Object(f.jsx)(O.a, {}),
							Object(f.jsx)("h3", {
								style: { fontSize: "25px", color: "#444" },
								children: "New Trip",
							}),
							Object(f.jsxs)("div", {
								style: { fontFamily: "arapey", color: "#444" },
								className: "dashboard-div",
								children: [
									Object(f.jsx)("p", {
										style: { margin: "3px", fontSize: "22px" },
										children: "Destination",
									}),
									Object(f.jsx)(le.a, {
										options: ["Hostel", "Campus"],
										onChange: p,
										value: "Hostel",
										className: "dropdown",
									}),
									Object(f.jsx)("p", {
										style: {
											marginBottom: "3px",
											marginLeft: "3px",
											fontSize: "22px",
										},
										children: "Departure Time",
									}),
									Object(f.jsx)(oe.a, {
										options: {
											enableTime: !0,
											noCalendar: !0,
											dateFormat: "H:i",
											minDate: new Date(Date.now()),
											defaultDate: s,
										},
										className: "input flatpickr",
										onChange: function (e) {
											c(e);
										},
										style: { width: "90%" },
									}),
									Object(f.jsx)("button", {
										className: "button green ",
										style: { width: "90%" },
										onClick: m,
										children: "Create Trip",
									}),
								],
							}),
						],
					})
				);
			}
			function de(e) {
				var t = e.loading,
					r = Object(n.useState)(""),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(n.useState)(!0),
					u = Object(o.a)(i, 2),
					d = u[0],
					b = u[1],
					j = Object(l.f)();
				Object(n.useEffect)(
					function () {
						b("" === s);
					},
					[s]
				);
				var p = w(
						{
							url: "https://bookbus.herokuapp.com/bus/admin/login",
							method: "post",
							body: { pin: s },
						},
						{ auth: !1 },
						t
					),
					h = (function () {
						var e = Object(g.a)(
							x.a.mark(function e() {
								var t;
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													if (!d) {
														e.next = 2;
														break;
													}
													return e.abrupt("return");
												case 2:
													return (e.prev = 2), (e.next = 5), p();
												case 5:
													200 === (t = e.sent).status &&
														(localStorage.setItem("adminToken", t.data),
														j.push("/admin/dashboard"),
														O.b.success("Logged in successfully!!", {
															autoClose: 1e3,
														})),
														(e.next = 17);
													break;
												case 9:
													(e.prev = 9),
														(e.t0 = e.catch(2)),
														(e.t1 = e.t0.message),
														(e.next = "400" === e.t1 ? 14 : 16);
													break;
												case 14:
													return (
														O.b.error("Invalid Pin", {
															position: "top-right",
															autoClose: 3e3,
															hideProgressBar: "false",
														}),
														e.abrupt("break", 17)
													);
												case 16:
													O.b.error("Something went wrong");
												case 17:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[2, 9]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})();
				return Object(f.jsxs)("div", {
					className: "container",
					children: [
						Object(f.jsx)(O.a, {}),
						Object(f.jsxs)("form", {
							style: {
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								background: "#fff",
								padding: "20px",
								alignSelf: "center",
								borderRadius: "5px",
								margin: "auto",
							},
							children: [
								Object(f.jsx)("div", {
									style: {
										fontSize: "25px",
										color: "#444",
										fontFamily: "Arapey",
										marginBottom: "5px",
									},
									children: "Login",
								}),
								Object(f.jsx)("input", {
									type: "password",
									className: "input",
									value: s,
									onChange: function (e) {
										return c(e.target.value);
									},
									placeholder: "Secret Pin",
									required: !0,
								}),
								Object(f.jsx)("button", {
									className: "button login-btn",
									onClick: function () {
										return h();
									},
									style: { opacity: d ? "0.6" : "1" },
									children: "Login",
								}),
							],
						}),
					],
				});
			}
			var be = r.p + "static/media/empty.f5635653.svg";
			function je(e) {
				var t = e.amount,
					r = e.loading,
					a = e.setFund,
					s = JSON.parse(localStorage.getItem("data")),
					c = Object(R.a)({
						reference: new Date().getTime().toString(),
						email: s.email,
						amount: t,
						publicKey: "pk_test_0a4093b99f32878ae511ab0f19d32710c16702f8",
					});
				Object(n.useEffect)(
					function () {
						return function () {
							return a(!1);
						};
					},
					[a]
				);
				return (
					c(
						function (e) {
							r(!0),
								(function () {
									var t = Object(g.a)(
										x.a.mark(function t() {
											return x.a.wrap(
												function (t) {
													for (;;)
														switch ((t.prev = t.next)) {
															case 0:
																return (
																	(t.prev = 0),
																	(t.next = 3),
																	S.a.post(
																		"https://bookbus.herokuapp.com/user/wallet/fund",
																		{ reference_id: e.reference },
																		{
																			headers: {
																				Authorization: "Bearer ".concat(
																					localStorage.getItem("token")
																				),
																			},
																		}
																	)
																);
															case 3:
																r(!1), window.location.reload(), (t.next = 11);
																break;
															case 7:
																(t.prev = 7),
																	(t.t0 = t.catch(0)),
																	r(!1),
																	window.location.reload();
															case 11:
															case "end":
																return t.stop();
														}
												},
												t,
												null,
												[[0, 7]]
											);
										})
									);
									return function () {
										return t.apply(this, arguments);
									};
								})()();
						},
						function () {
							r(!1), a(!1), window.location.reload();
						}
					),
					Object(f.jsx)("div", { children: r(!0) })
				);
			}
			function pe(e) {
				var t = e.loading,
					r = e.setWallet,
					a = e.fund,
					s = e.setFund,
					c = e.amount,
					i = Object(n.useState)([]),
					u = Object(o.a)(i, 2),
					d = u[0],
					b = u[1],
					j = Object(n.useState)(!0),
					p = Object(o.a)(j, 2),
					h = p[0],
					m = p[1],
					v = Object(n.useState)(!1),
					y = Object(o.a)(v, 2),
					k = y[0],
					N = y[1],
					B = w(
						{ url: "https://bookbus.herokuapp.com/user", method: "get" },
						{ auth: !0, type: "user" },
						t
					),
					D = w(
						{
							url: "https://bookbus.herokuapp.com/user/bus/Hostel",
							method: "get",
						},
						{ auth: !0, type: "user" },
						t
					),
					T = w(
						{
							url: "https://bookbus.herokuapp.com/user/bus/Campus",
							method: "get",
						},
						{ auth: !0, type: "user" },
						t
					),
					_ = (function () {
						var e = Object(g.a)(
							x.a.mark(function e(t, r) {
								return x.a.wrap(function (e) {
									for (;;)
										switch ((e.prev = e.next)) {
											case 0:
												console.log(t.toLowerCase(), r),
													F.a
														.fire({
															title: "Do you really want to cancel trip?",
															showCancelButton: !0,
															confirmButtonText: "Yes",
														})
														.then(
															(function () {
																var e = Object(g.a)(
																	x.a.mark(function e(n) {
																		return x.a.wrap(
																			function (e) {
																				for (;;)
																					switch ((e.prev = e.next)) {
																						case 0:
																							if (!n.isConfirmed) {
																								e.next = 21;
																								break;
																							}
																							return (
																								(e.prev = 1),
																								(e.next = 4),
																								S.a.post(
																									"https://bookbus.herokuapp.com/user/cancel-trip/"
																										.concat(
																											t.toLowerCase(),
																											"/"
																										)
																										.concat(r),
																									{},
																									{
																										headers: {
																											Authorization:
																												"Bearer ".concat(
																													localStorage.getItem(
																														"token"
																													)
																												),
																										},
																									}
																								)
																							);
																						case 4:
																							e.sent,
																								O.b.success(
																									"Trip cancelled successfully"
																								),
																								setTimeout(function () {
																									return window.location.reload();
																								}, 1500),
																								(e.next = 21);
																							break;
																						case 9:
																							(e.prev = 9),
																								(e.t0 = e.catch(1)),
																								(e.t1 = e.t0.message),
																								(e.next =
																									"400" === e.t1
																										? 14
																										: "401" === e.t1
																										? 16
																										: 20);
																							break;
																						case 14:
																							return (
																								O.b.error("An error occured", {
																									position: "top-right",
																									autoClose: 3e3,
																									hideProgressBar: "false",
																								}),
																								e.abrupt("break", 21)
																							);
																						case 16:
																							return (
																								O.b.error("Session Expired"),
																								z.push("/admin"),
																								localStorage.clear(),
																								e.abrupt("break", 21)
																							);
																						case 20:
																							O.b.error("An error occured");
																						case 21:
																						case "end":
																							return e.stop();
																					}
																			},
																			e,
																			null,
																			[[1, 9]]
																		);
																	})
																);
																return function (t) {
																	return e.apply(this, arguments);
																};
															})()
														);
											case 2:
											case "end":
												return e.stop();
										}
								}, e);
							})
						);
						return function (t, r) {
							return e.apply(this, arguments);
						};
					})(),
					z = Object(l.f)(),
					A = Object(n.useCallback)(
						(function () {
							var e = Object(g.a)(
								x.a.mark(function e(t) {
									var r;
									return x.a.wrap(
										function (e) {
											for (;;)
												switch ((e.prev = e.next)) {
													case 0:
														if (((e.prev = 0), "hostel" !== t)) {
															e.next = 7;
															break;
														}
														return (e.next = 4), D();
													case 4:
														(e.t0 = e.sent), (e.next = 10);
														break;
													case 7:
														return (e.next = 9), T();
													case 9:
														e.t0 = e.sent;
													case 10:
														200 === (r = e.t0).status &&
															(b(r.data),
															m("hostel" === t),
															r.data.ticket ? N(!0) : N(!1)),
															(e.next = 24);
														break;
													case 14:
														(e.prev = 14),
															(e.t1 = e.catch(0)),
															(e.t2 = e.t1.message),
															(e.next = "401" === e.t2 ? 19 : 23);
														break;
													case 19:
														return (
															O.b.error("Session Expired"),
															z.push("/user"),
															localStorage.clear(),
															e.abrupt("break", 24)
														);
													case 23:
														O.b.error("An error occured");
													case 24:
													case "end":
														return e.stop();
												}
										},
										e,
										null,
										[[0, 14]]
									);
								})
							);
							return function (t) {
								return e.apply(this, arguments);
							};
						})(),
						[T, D, z]
					),
					E = Object(n.useCallback)(
						Object(g.a)(
							x.a.mark(function e() {
								var t, n, a, s, c;
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.prev = 0), (e.next = 3), B();
												case 3:
													(t = e.sent),
														(n = t.data),
														(a = n.name),
														(s = n.email),
														(c = n.matric_number),
														localStorage.setItem(
															"data",
															JSON.stringify({
																name: a,
																email: s,
																matric_number: c,
															})
														),
														A("hostel"),
														r(t.data.wallet),
														(e.next = 20);
													break;
												case 10:
													(e.prev = 10),
														(e.t0 = e.catch(0)),
														(e.t1 = e.t0.message),
														(e.next = "401" === e.t1 ? 15 : 19);
													break;
												case 15:
													return (
														O.b.error("Session Expired"),
														z.push("/user"),
														localStorage.clear(),
														e.abrupt("break", 20)
													);
												case 19:
													O.b.error("An error occured");
												case 20:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[0, 10]]
								);
							})
						),
						[B, A, r, z]
					);
				Object(n.useEffect)(function () {
					E();
				}, []);
				var L = function (e) {
					return (
						V.a.extend(K.a),
						V.a.extend(Q.a),
						V()(e).tz("Africa/Lagos").format("hh:mm A")
					);
				};
				return Object(f.jsxs)("div", {
					className: "container",
					children: [
						Object(f.jsx)(O.a, {}),
						Object(f.jsxs)("div", {
							style: {
								fontSize: "25px",
								alignSelf: "flex-start",
								marginLeft: "10px",
								fontWeight: "bold",
								color: "#444",
							},
							children: [
								"Welcome",
								" ",
								localStorage.getItem("data")
									? JSON.parse(localStorage.getItem("data")).name.split(" ")[0]
									: "Anonymous",
							],
						}),
						Object(f.jsx)("div", {
							style: {
								fontSize: "22px",
								fontFamily: "flamenco",
								padding: "20px",
							},
							children: "Where are you going to?",
						}),
						Object(f.jsxs)("div", {
							style: {
								display: "flex",
								alignSelf: "flex-end",
								marginRight: "20px",
								background: "#fff",
								borderRadius: "47%",
							},
							children: [
								Object(f.jsx)("button", {
									style: h ? fe : he,
									onClick: function () {
										return A("hostel");
									},
									children: "Hostel",
								}),
								Object(f.jsx)("button", {
									style: h ? he : fe,
									onClick: function () {
										return A("campus");
									},
									children: "Campus",
								}),
							],
						}),
						a
							? Object(f.jsx)(je, { amount: c, loading: t, setFund: s })
							: k
							? Object(f.jsx)("div", {
									children: Object(f.jsx)("div", {
										className: "home",
										children: d[Object.keys(d)[0]]
											? Object(f.jsxs)("div", {
													className: "dashboard-div",
													children: [
														Object(f.jsx)("div", {
															style: {
																alignSelf: "flex-end",
																backgroundColor: "#b3f1cb",
																color: "#50c878",
																padding: "5px",
																fontFamily: "arapey",
															},
															children: "Booked",
														}),
														Object(f.jsxs)("div", {
															style: {
																height: "150px",
																width: "150px",
																borderRadius: "50%",
																background: "#b3f1cb",
																display: "flex",
																flexDirection: "column",
																alignItems: "center",
																justifyContent: "center",
															},
															className: "",
															children: [
																Object(f.jsx)(C.a, {
																	icon: I.b,
																	size: "lg",
																	style: { color: "#50c878" },
																}),
																Object(f.jsxs)("b", {
																	style: { color: "#fff", fontSize: "2rem" },
																	children: ["0", d[Object.keys(d)[0]].bus_id],
																}),
															],
														}),
														Object(f.jsxs)("p", {
															style: { fontFamily: "arapey", color: "#444" },
															children: [
																"Departure Time:",
																" ",
																d[Object.keys(d)[0]].departure_time
																	? L(d[Object.keys(d)[0]].departure_time)
																	: null,
															],
														}),
														Object(f.jsx)("button", {
															className: "button book",
															onClick: function () {
																localStorage.setItem(
																	"ticket",
																	JSON.stringify({
																		bus_id: d[Object.keys(d)[0]].bus_id,
																		code: d.ticket.code,
																		seat: d.ticket.seat,
																		destination:
																			d[Object.keys(d)[0]].destination,
																		departure_time: L(
																			d[Object.keys(d)[0]].departure_time
																		),
																	})
																),
																	z.push("/user/ticket");
															},
															children: "View Ticket",
														}),
														Object(f.jsx)("button", {
															className: "button book red",
															onClick: function () {
																return _(
																	d[Object.keys(d)[0]].destination,
																	d[Object.keys(d)[0]].bus_id
																);
															},
															children: "Cancel Trip",
														}),
													],
											  })
											: null,
									}),
							  })
							: Object(f.jsx)(f.Fragment, {
									children: Object(f.jsx)("div", {
										className: "home",
										children:
											Array.isArray(d) && 0 !== d.length
												? d.map(function (e, t) {
														return Object(f.jsxs)(
															"div",
															{
																className: "dashboard-div",
																children: [
																	Object(f.jsxs)("div", {
																		style: {
																			height: "150px",
																			width: "150px",
																			borderRadius: "50%",
																			background: "#b3f1cb",
																			display: "flex",
																			flexDirection: "column",
																			alignItems: "center",
																			justifyContent: "center",
																		},
																		className: "",
																		children: [
																			Object(f.jsx)(C.a, {
																				icon: I.b,
																				size: "lg",
																				style: { color: "#50c878" },
																			}),
																			Object(f.jsxs)("b", {
																				style: {
																					color: "#fff",
																					fontSize: "2rem",
																				},
																				children: ["0", e.bus_id],
																			}),
																		],
																	}),
																	Object(f.jsxs)("p", {
																		style: {
																			fontFamily: "arapey",
																			color: "#444",
																		},
																		children: [
																			"Departure Time:",
																			" ",
																			e.departure_time
																				? L(e.departure_time)
																				: null,
																		],
																	}),
																	Object(f.jsx)("button", {
																		className: "button book",
																		onClick: function () {
																			return (
																				(t = e.bus_id),
																				localStorage.setItem("bus_id", t),
																				void z.push("/user/book")
																			);
																			var t;
																		},
																		children: "Book",
																	}),
																],
															},
															t
														);
												  })
												: Object(f.jsxs)("div", {
														style: { width: "100%" },
														children: [
															Object(f.jsxs)("p", {
																style: { fontSize: "20px" },
																children: [
																	"Sorry we couldn't find any Bus going to the",
																	" ",
																	h ? "Hostel" : "Campus",
																],
															}),
															Object(f.jsx)("img", {
																src: be,
																alt: "No Data",
																style: {
																	width: "100%",
																	border: "none",
																	colorAdjust: "#000",
																	outline: "none",
																},
															}),
														],
												  }),
									}),
							  }),
					],
				});
			}
			var fe = {
					height: "50px",
					width: "50px",
					borderRadius: "50%",
					background: "rgb(247, 10, 187)",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					border: "none",
					color: "#fff",
					fontFamily: "flamenco",
					margin: "5px",
					outline: "none",
				},
				he = {
					height: "50px",
					width: "50px",
					borderRadius: "50%",
					background: "grey",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					justifyContent: "center",
					border: "none",
					color: "#fff",
					fontFamily: "flamenco",
					margin: "5px",
					outline: "none",
					opacity: "0.5",
				};
			function me(e) {
				e.loading;
				var t = Object(l.f)();
				return Object(f.jsx)("div", {
					className: "container",
					children: Object(f.jsxs)("div", {
						className: "home-div",
						children: [
							Object(f.jsx)("button", {
								className: "input button green",
								onClick: function () {
									return t.push("/admin/register-bus");
								},
								children: "Register New Bus",
							}),
							Object(f.jsx)("button", {
								className: "input button green",
								onClick: function () {
									return t.push("/admin/buses");
								},
								children: "View Registered Busess",
							}),
						],
					}),
				});
			}
			function xe(e) {
				var t = e.loading,
					r = Object(n.useState)(""),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = Object(n.useState)(""),
					u = Object(o.a)(i, 2),
					d = u[0],
					b = u[1],
					j = Object(n.useState)(""),
					p = Object(o.a)(j, 2),
					h = p[0],
					m = p[1],
					v = Object(n.useState)(""),
					y = Object(o.a)(v, 2),
					k = y[0],
					S = y[1],
					N = Object(n.useState)(""),
					C = Object(o.a)(N, 2),
					I = C[0],
					B = C[1],
					D = Object(n.useState)(!0),
					F = Object(o.a)(D, 2),
					T = F[0],
					_ = F[1],
					z = Object(l.f)();
				Object(n.useEffect)(
					function () {
						_("" === s || "" === d || "" === h || "" === k);
					},
					[d, s, h, k]
				);
				var A = w(
						{
							url: "https://bookbus.herokuapp.com/bus/register",
							method: "post",
							body: { username: s, password: d, number_of_seat: k, bus_id: h },
						},
						{ auth: !0, type: "admin" },
						t
					),
					E = (function () {
						var e = Object(g.a)(
							x.a.mark(function e() {
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.prev = 0), (e.next = 3), A();
												case 3:
													201 === e.sent.status &&
														(O.b.success("Bus Registered Successfully"),
														b(""),
														c(""),
														m(""),
														S(""),
														B("")),
														(e.next = 19);
													break;
												case 7:
													(e.prev = 7),
														(e.t0 = e.catch(0)),
														(e.t1 = e.t0.message),
														(e.next =
															"400" === e.t1 ? 12 : "401" === e.t1 ? 14 : 18);
													break;
												case 12:
													return (
														O.b.error("Bus Already Exist", {
															position: "top-right",
															autoClose: 3e3,
															hideProgressBar: "false",
														}),
														e.abrupt("break", 19)
													);
												case 14:
													return (
														O.b.error("Session Expired"),
														z.push("/admin"),
														localStorage.clear(),
														e.abrupt("break", 19)
													);
												case 18:
													O.b.error("An error occured");
												case 19:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[0, 7]]
								);
							})
						);
						return function () {
							return e.apply(this, arguments);
						};
					})();
				return Object(f.jsxs)("div", {
					className: "container",
					children: [
						Object(f.jsx)(O.a, {}),
						Object(f.jsxs)("form", {
							className: "dashboard-div",
							children: [
								Object(f.jsx)("input", {
									type: "text",
									className: "input",
									value: s,
									onChange: function (e) {
										return c(e.target.value);
									},
									placeholder: "Driver Username",
									required: !0,
								}),
								Object(f.jsx)("input", {
									type: "text",
									className: "input",
									value: h,
									onChange: function (e) {
										return m(e.target.value);
									},
									placeholder: "Bus Number",
									required: !0,
								}),
								Object(f.jsx)("input", {
									type: "number",
									className: "input",
									value: k,
									onChange: function (e) {
										return S(e.target.value);
									},
									placeholder: "Number of Seats",
									required: !0,
								}),
								Object(f.jsx)("input", {
									type: "password",
									className: "input",
									value: d,
									onChange: function (e) {
										return b(e.target.value);
									},
									placeholder: "Password",
									required: !0,
								}),
								Object(f.jsx)("input", {
									type: "password",
									className: "input",
									value: I,
									onChange: function (e) {
										return B(e.target.value);
									},
									placeholder: "Confirm Password",
									required: !0,
								}),
								Object(f.jsx)("button", {
									className: "button green input",
									onClick: function () {
										return d === I ? E() : O.b.error("Password doesn't match");
									},
									style: { opacity: T ? "0.6" : "1" },
									children: "Register",
								}),
							],
						}),
					],
				});
			}
			function ge(e) {
				var t = e.loading,
					r = Object(n.useState)([]),
					a = Object(o.a)(r, 2),
					s = a[0],
					c = a[1],
					i = w(
						{ url: "https://bookbus.herokuapp.com/bus", method: "get" },
						{ auth: !0, type: "admin" },
						t
					),
					u = Object(l.f)(),
					d = Object(n.useCallback)(
						Object(g.a)(
							x.a.mark(function e() {
								var t;
								return x.a.wrap(
									function (e) {
										for (;;)
											switch ((e.prev = e.next)) {
												case 0:
													return (e.prev = 0), (e.next = 3), i();
												case 3:
													(t = e.sent), c(t.data), (e.next = 17);
													break;
												case 7:
													(e.prev = 7),
														(e.t0 = e.catch(0)),
														(e.t1 = e.t0.message),
														(e.next = "401" === e.t1 ? 12 : 16);
													break;
												case 12:
													return (
														O.b.error("Session Expired"),
														u.push("/admin"),
														localStorage.clear(),
														e.abrupt("break", 17)
													);
												case 16:
													O.b.error("An error occured");
												case 17:
												case "end":
													return e.stop();
											}
									},
									e,
									null,
									[[0, 7]]
								);
							})
						),
						[i, u]
					);
				return (
					Object(n.useEffect)(function () {
						d();
					}, []),
					Object(f.jsxs)("div", {
						className: "container",
						children: [
							Object(f.jsx)("div", {
								style: {
									fontSize: "22px",
									fontFamily: "flamenco",
									padding: "20px",
								},
								children: "Registered Buses",
							}),
							Object(f.jsx)("div", {
								className: "home",
								children:
									Array.isArray(s) && 0 !== s.length
										? s.map(function (e, t) {
												return Object(f.jsxs)(
													"div",
													{
														className: "dashboard-div",
														children: [
															Object(f.jsxs)("div", {
																style: {
																	height: "150px",
																	width: "150px",
																	borderRadius: "50%",
																	background: "#b3f1cb",
																	display: "flex",
																	flexDirection: "column",
																	alignItems: "center",
																	justifyContent: "center",
																},
																className: "",
																children: [
																	Object(f.jsx)(C.a, {
																		icon: I.b,
																		size: "lg",
																		style: { color: "#50c878" },
																	}),
																	Object(f.jsxs)("b", {
																		style: { color: "#fff", fontSize: "2rem" },
																		children: ["0", e.bus_id],
																	}),
																],
															}),
															Object(f.jsxs)("p", {
																style: { fontFamily: "arapey", color: "#444" },
																children: ["Driver Username: ", e.username],
															}),
															Object(f.jsxs)("p", {
																style: { fontFamily: "arapey", color: "#444" },
																children: [
																	"Number of Seats: ",
																	e.number_of_seat,
																],
															}),
														],
													},
													t
												);
										  })
										: Object(f.jsxs)("div", {
												style: { width: "100%" },
												children: [
													Object(f.jsx)("p", {
														style: { fontSize: "20px" },
														children: "No Bus Registered Yet",
													}),
													Object(f.jsx)("img", {
														src: be,
														alt: "No Data",
														style: {
															width: "100%",
															border: "none",
															colorAdjust: "#000",
															outline: "none",
														},
													}),
												],
										  }),
							}),
						],
					})
				);
			}
			var Oe = function () {
					var e = Object(n.useState)(!1),
						t = Object(o.a)(e, 2),
						r = t[0],
						a = t[1],
						s = Object(n.useState)(!1),
						c = Object(o.a)(s, 2),
						u = c[0],
						d = c[1],
						b = Object(n.useState)(""),
						j = Object(o.a)(b, 2),
						p = j[0],
						m = j[1],
						x = Object(n.useState)(""),
						g = Object(o.a)(x, 2),
						O = g[0],
						v = g[1],
						y = Object(n.useState)(!1),
						k = Object(o.a)(y, 2),
						S = k[0],
						w = k[1],
						C = function (e) {
							a(!!e);
						};
					return Object(f.jsxs)(f.Fragment, {
						children: [
							r ? Object(f.jsx)(W, {}) : null,
							Object(f.jsx)("div", {
								className: "App",
								style: {
									opacity: r ? "0.1" : "1",
									pointerEvents: r ? "none" : "all",
								},
								children: Object(f.jsxs)(i.a, {
									children: [
										Object(f.jsx)(E, {
											showNavbar: u,
											setShowNavbar: d,
											wallet: p,
											fundWallet: function () {
												d(!1),
													F.a
														.fire({
															title: "Enter Amount",
															input: "number",
															inputAttributes: { autocapitalize: "off" },
															showCancelButton: !0,
															confirmButtonText: "Fund wallet",
															showLoaderOnConfirm: !0,
															preConfirm: function (e) {
																v(100 * e);
															},
															allowOutsideClick: function () {
																return !F.a.isLoading();
															},
														})
														.then(function (e) {
															e.isConfirmed && w(!0);
														});
											},
										}),
										Object(f.jsx)("section", {
											style: { display: u ? "none" : "block" },
											children: Object(f.jsxs)(l.c, {
												children: [
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/",
														children: Object(f.jsx)(h, {}),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/user",
														children: Object(f.jsx)(N, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/user/dashboard",
														children: Object(f.jsx)(pe, {
															loading: C,
															setWallet: m,
															fund: S,
															setFund: w,
															amount: O,
														}),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/user/book",
														children: Object(f.jsx)($, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/driver",
														children: Object(f.jsx)(te, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/admin",
														children: Object(f.jsx)(de, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/admin/dashboard",
														children: Object(f.jsx)(me, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/admin/register-bus",
														children: Object(f.jsx)(xe, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/admin/buses",
														children: Object(f.jsx)(ge, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/driver/dashboard",
														children: Object(f.jsx)(se, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/driver/newtrip",
														children: Object(f.jsx)(ue, { loading: C }),
													}),
													Object(f.jsx)(l.a, {
														exact: !0,
														path: "/user/ticket",
														children: Object(f.jsx)(q, { loading: C }),
													}),
												],
											}),
										}),
									],
								}),
							}),
						],
					});
				},
				ve = function (e) {
					e &&
						e instanceof Function &&
						r
							.e(3)
							.then(r.bind(null, 136))
							.then(function (t) {
								var r = t.getCLS,
									n = t.getFID,
									a = t.getFCP,
									s = t.getLCP,
									c = t.getTTFB;
								r(e), n(e), a(e), s(e), c(e);
							});
				};
			c.a.render(
				Object(f.jsx)(a.a.StrictMode, { children: Object(f.jsx)(Oe, {}) }),
				document.getElementById("root")
			),
				ve();
		},
		66: function (e, t, r) {},
		67: function (e, t, r) {},
	},
	[[133, 1, 2]],
]);
//# sourceMappingURL=main.05c3864a.chunk.js.map
