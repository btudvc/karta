// ── i18n ───────────────────────────────────────────────
const I18N = {
  en: {
    'mode.job': 'Job', 'mode.daily': 'Personal',
    'tab.projects': 'Projects', 'tab.lists': 'Lists', 'tab.tasks': 'Tasks',
    'tab.today': 'Today', 'tab.calendar': 'Calendar', 'tab.journal': 'Journal',
    'tab.meetings': 'Meetings', 'tab.visits': 'Visits', 'tab.releases': 'Releases',
    'tab.more': 'More',
    'more.language': 'Language', 'more.theme': 'Theme', 'more.drive': 'Google Drive',
    'more.section.pages': 'Pages', 'more.section.settings': 'Settings',
    'sidebar.projects': 'Projects', 'sidebar.lists': 'Lists',
    'sidebar.meetings': 'Meetings', 'sidebar.releases': 'Releases',
    'sidebar.entries': 'Entries',
    'btn.add': '+ Add', 'btn.cancel': 'Cancel', 'btn.save_changes': 'Save Changes',
    'btn.edit': 'Edit', 'btn.delete': 'Delete',
    'btn.delete_project': 'Delete Project', 'btn.delete_list': 'Delete List',
    'btn.today': 'Today',
    'btn.add_project': 'Add Project', 'btn.add_list': 'Add List',
    'btn.add_task': 'Add Task', 'btn.add_visit': 'Add Visit',
    'btn.add_release': 'Add Release', 'btn.add_version': 'Add Version',
    'btn.add_issue': 'Add Issue', 'btn.add_meeting': 'Add Meeting',
    'modal.add_new_project': 'Add New Project', 'modal.add_new_list': 'Add New List',
    'modal.edit_project': 'Edit Project', 'modal.edit_list': 'Edit List',
    'modal.add_task': 'Add Task', 'modal.edit_task': 'Edit Task',
    'modal.add_visit': 'Add Visit', 'modal.edit_visit': 'Edit Visit',
    'modal.add_release': 'Add Release', 'modal.edit_release': 'Edit Release',
    'modal.add_version': 'Add Version', 'modal.edit_version': 'Edit Version',
    'modal.add_issue': 'Add Known Issue', 'modal.edit_issue': 'Edit Issue',
    'modal.add_meeting': 'Add Meeting', 'modal.edit_meeting': 'Edit Meeting',
    'label.project_name': 'Project Name *', 'label.list_name': 'List Name *',
    'label.task_title': 'Task Title *', 'label.priority': 'Priority',
    'label.status': 'Status', 'label.severity': 'Severity',
    'label.due_date': 'Due Date', 'label.tags': 'Tags',
    'label.description': 'Description', 'label.category': 'Category',
    'label.location': 'Location *', 'label.date': 'Date *',
    'label.reference': 'Reference', 'label.notes': 'Notes',
    'label.changes': 'Changes', 'label.release_code': 'Release Code *',
    'label.name': 'Name', 'label.project_platform': 'Project / Platform',
    'label.version': 'Version *', 'label.issue_title': 'Issue Title *',
    'label.title': 'Title *', 'label.location_platform': 'Location / Platform',
    'label.attendees': 'Attendees', 'label.related': 'Related Project',
    'label.filename': 'File name',
    'ph.project_name': 'e.g. Customer onboarding, Q4 launch...',
    'ph.list_name': 'e.g. Shopping, To read, Movies...',
    'ph.category': 'e.g. Work, Personal, Clients...',
    'ph.description': 'Scope, deliverables, stakeholders...',
    'ph.task_title': 'What needs to be done?',
    'ph.location': 'e.g. Korea, Seoul — Samsung HQ',
    'ph.reference': 'Project, customer, asset...',
    'ph.visit_notes': 'Purpose, agenda, team members...',
    'ph.release_code': 'REL-2024-001 / A33-200007-R001',
    'ph.short_name': 'Short name, e.g. Walker Motor Controller',
    'ph.fw_desc': 'Purpose, platform, details...',
    'ph.platform': 'e.g. Mobile app, Walker, Atlas...',
    'ph.version': 'A33-200007-R001-V002',
    'ph.changes_lines': '- Balance algorithm updated\n- Motor driver bug fixed\n- New sensor support added',
    'ph.cl_notes': 'Test notes, known issues...',
    'ph.issue_title': 'Briefly describe the issue...',
    'ph.meeting_title': 'Meeting topic...',
    'ph.meeting_loc': 'e.g. Teams, Office, Samsung HQ...',
    'ph.attendees': 'e.g. Batu, Ali, Mehmet...',
    'ph.related_project': 'e.g. Walker, KUKA...',
    'ph.note': 'Write a note... (Ctrl+Enter to save)',
    'ph.action_item': 'New action item... (Enter to add)',
    'ph.brainstorm_notes': 'Meeting notes, decisions, topics discussed...',
    'empty.select_project': 'Select a project from the sidebar\nor add a new one to get started.',
    'empty.select_list': 'Select a list from the sidebar\nor add a new one to get started.',
    'empty.select_release': 'Select a release or add a new one.',
    'empty.select_meeting': 'Select a meeting or add a new one.',
    'empty.no_projects': 'No projects yet',
    'empty.no_lists': 'No lists yet',
    'empty.no_releases': 'No releases yet',
    'empty.no_meetings': 'No meetings yet',
    'empty.no_visits': 'No visits planned yet.',
    'empty.no_versions': 'No versions yet.',
    'empty.no_tasks_open': 'No tasks open.',
    'empty.no_tasks_today': 'No tasks for today.',
    'empty.no_tasks_yet': 'No tasks yet.',
    'empty.no_tasks_add': 'No tasks yet. Add your first task!',
    'empty.no_issues': 'No issues recorded.',
    'empty.no_notes': 'No notes yet.',
    'empty.no_journal': 'No entries yet. Start with today.',
    'empty.select_day': 'Select a day',
    'filter.open': 'Open', 'filter.today': 'Today', 'filter.all': 'All',
    'cal.meetings': 'Meetings', 'cal.visits': 'Visits', 'cal.notes': 'Notes',
    'cal.notes_placeholder': 'Add a note for this day...',
    'jrn.entries': 'Entries',
    'jrn.placeholder': 'Write about today... thoughts, what happened, plans...',
    'jrn.saved': 'Saved',
    'bp.title': 'Cloud Backup',
    'bp.subtitle_detected': 'Drive detected — connect in one click',
    'bp.connect_button': 'Connect to Google Drive',
    'bp.no_drive_title': 'Google Drive not found.',
    'bp.no_drive_desc': 'For automatic sync, install Google Drive Desktop.',
    'bp.install_drive': 'Install Google Drive',
    'bp.install_link': 'google.com/drive/download',
    'bp.manual_folder': 'Choose folder manually',
    'bp.or_manual_folder': 'Or choose folder manually',
    'bp.hint_drive': 'Files are written to a "B-Less" folder in Drive and synced automatically.',
    'bp.hint_install': 'After installing Drive and signing in, reopen the app — it will auto-detect.',
    'bp.last_sync': 'Last sync',
    'bp.never': 'Never',
    'bp.just_now': 'Just now',
    'bp.min_ago': '{n} min ago',
    'bp.backup_now': 'Backup Now',
    'bp.restore': 'Restore',
    'bp.disconnect': 'Disconnect',
    'bp.disconnect_confirm': 'Disconnect? Data stays local, sync stops.',
    'bp.no_backup_found': 'No backup file found in folder.',
    'bp.connect_failed': 'Could not connect: {msg}',
    'bp.restore_overwrite': 'Backup found ({date}, {n} project(s)).\n\nOverwrite existing data?',
    'bp.restore_load': 'Backup found ({date}, {n} project(s)).\n\nLoad data?',
    'bp.open_folder': 'Open folder',
    'att.section': 'Attachments',
    'att.add': 'Attach file',
    'att.empty': 'No attachments',
    'att.too_big': '"{name}" is too large (max 25 MB)',
    'att.confirm_delete': 'Delete this attachment?',
    'att.desktop_only': 'Attachments work in the desktop app only.',
    'att.signin_required': 'Sign in to Google Drive to attach files.',
    'att.failed': 'Could not save: {msg}',
    'add_item.title': 'Add to space',
    'add_item.list': 'List', 'add_item.list_hint': 'Tasks grouped under a name',
    'add_item.meeting': 'Meeting', 'add_item.meeting_hint': 'Notes + action items for a single meeting',
    'add_item.visit': 'Visit', 'add_item.visit_hint': 'Plan a place + date',
    'add_item.journal': 'Journal', 'add_item.journal_hint': 'Daily free-form entries',
    'add_item.finance': 'Expenses', 'add_item.finance_hint': 'Subscriptions and monthly costs',
    'add_item.purchases': 'Purchases', 'add_item.purchases_hint': 'Wishlist & procurement tracking',
    'add_item.review': 'Reviews', 'add_item.review_hint': 'Weekly & monthly summary notes',
    'add_item.links': 'Links', 'add_item.links_hint': 'Save URLs you don’t want to lose',
    'links.title':         'Links',
    'links.subtitle':      'Bookmarks you don’t want to lose',
    'links.add':           '+ Add Link',
    'links.modal_add':     'Add Link',
    'links.modal_edit':    'Edit Link',
    'links.empty':         'No links yet. Add the first one above.',
    'links.no_match':      'No links match your search.',
    'links.confirm_delete':'Delete this link?',
    'links.search_ph':     'Search title, URL, tag, notes…',
    'links.f.url':         'URL',
    'links.f.title':       'Title',
    'links.f.tag':         'Tag',
    'links.f.notes':       'Notes',
    'reviews.title':         'Reviews',
    'reviews.subtitle':      'Weekly & monthly summary notes',
    'reviews.tab.week':      'Weekly',
    'reviews.tab.month':     'Monthly',
    'reviews.current_week':  '+ This week',
    'reviews.current_month': '+ This month',
    'reviews.empty':         'No entries yet. Click the button above to start one.',
    'reviews.no_entry':      'No entry selected',
    'reviews.confirm_delete':'Delete this summary?',
    'reviews.saved':         'Saved',
    'reviews.week_label':    'Week',
    'reviews.placeholder':   'Wins, blockers, things to revisit, lessons…',
    'more.section.tools': 'Tools',
    'tools.title': 'Calculators',
    'tools.subtitle': 'Engineering calculators',
    'tools.back': '‹ Back to list',
    'purchases.title': 'Purchases',
    'purchases.subtitle': 'Wishlist → buying → done',
    'purchases.add': '+ Add Purchase',
    'purchases.modal_add': 'Add Purchase',
    'purchases.modal_edit': 'Edit Purchase',
    'purchases.empty': 'No purchases yet. Click "+ Add Purchase" to start your wishlist.',
    'purchases.confirm_delete': 'Delete this purchase?',
    'purchases.filter.all': 'All',
    'purchases.status.wishlist': 'Wishlist',
    'purchases.status.buying':   'Buying',
    'purchases.status.done':     'Done',
    'purchases.f.name':          'Name',
    'purchases.f.status':        'Status',
    'purchases.f.project':       'Linked project',
    'purchases.f.project_none':  '— None —',
    'purchases.f.est':           'Estimated price',
    'purchases.f.actual':        'Actual price',
    'purchases.f.supplier':      'Supplier',
    'purchases.f.url':           'Link',
    'purchases.f.notes':         'Notes',
    'purchases.f.date_request':  'Requested',
    'purchases.f.date_order':    'Ordered',
    'purchases.f.date_delivery': 'Delivered',
    'cross.today': 'Today', 'cross.calendar': 'Calendar', 'cross.all_tasks': 'All Tasks', 'cross.visits': 'Visits',
    'nav.spaces': 'Spaces',
    'btn.add_short': '+ Add',
    'btn.save': 'Save',
    'btn.today_star': '★ Today',
    'btn.add_to_today': '☆ Add to today',
    'btn.start_today_title': 'Start today',
    'btn.remove_today_title': 'Remove from today',
    'aria.delete': 'Delete',
    'aria.completed': 'Completed',
    'ph.note_input': 'Write a note... (Ctrl+Enter to save)',
    'due.today': 'today', 'due.tomorrow': 'tomorrow', 'due.yesterday': 'yesterday',
    'due.days_from_now': '{n}d to go', 'due.days_ago': '{n}d ago',
    'months.short': 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec',
    'meeting.notes_label': 'Notes',
    'space.name_prompt': 'Space name:',
    'label.space': 'Space',
    'bp.sign_in': 'Sign in with Google',
    'bp.sign_out': 'Sign out',
    'bp.signed_in_as': 'Signed in as',
    'bp.web_subtitle': 'Sign in to back up to your Google Drive.',
    'bp.web_hint': 'Files are stored in your Drive under a private "B-Less" folder. Same files are visible when you open B-Less on desktop.',
    'bp.signing_in': 'Signing in…',
    'bp.sign_in_failed': 'Sign-in failed: {msg}',
    'bp.desktop_only': 'Only works in desktop app.',
    'bp.filename': 'File',
    'bp.rename': 'Rename',
    'bp.rename_prompt': 'New backup file name (existing file will be renamed):',
    'bp.custom_folder': 'Custom folder',
    'bp.set_up': 'Set up backup',
    'conf.delete_project': 'Delete this project and all its data?',
    'conf.delete_list': 'Delete this list and all its data?',
    'conf.delete_task': 'Delete this task?',
    'conf.delete_release': 'Delete this release?',
    'conf.delete_meeting': 'Delete this meeting?',
    'conf.delete_visit': 'Delete this field visit?',
    'conf.delete_issue': 'Delete this issue?',
    'count.tasks_one': '1 active task',
    'count.tasks_other': '{n} active tasks',
    'count.tasks_zero': 'No active tasks',
    'count.actions_short': '{open} action(s)',
    'count.versions_one': '1 version',
    'count.versions_other': '{n} versions',
    'count.open': '{n} open',
    'task.tasks_label': 'Tasks',
    'task.issues_label': 'Known Issues',
    'task.actions_label': 'Action Items',
    'task.notes_label': 'Notes',
    'task.changelog_label': 'Changelog',
    'btn.done': 'Done', 'btn.reopen': 'Reopen', 'btn.pending': 'Pending',
    'btn.activate': 'Activate', 'btn.investigating': 'Investigating',
    'btn.resolved': 'Resolved',
    'visits.title': 'Visits', 'visits.subtitle': 'Planned visits and trips',
    'all_tasks.title': 'All Tasks',
    'all_tasks.subtitle': 'Everything across your projects',
    'note.add': '+ Add', 'note.empty': 'No notes yet.',
    'days.future': '{n} days away', 'days.past': '{n} days ago', 'days.today': 'Today!',
    'priority.normal': 'Normal', 'priority.high': 'High', 'priority.critical': 'Critical', 'priority.low': 'Low', 'priority.medium': 'Medium',
    'status.active': 'Active', 'status.pending': 'Pending', 'status.done': 'Done',
    'status.open': 'Open', 'status.investigating': 'Investigating', 'status.resolved': 'Resolved',
    'status.testing': 'Testing', 'status.rc': 'RC', 'status.stable': 'Stable', 'status.deprecated': 'Deprecated',
    'fin.title': 'Expenses',
    'fin.subtitle': 'Subscriptions and recurring monthly costs',
    'fin.add_subscription': 'Add Subscription',
    'fin.modal_add': 'Add Subscription',
    'fin.modal_edit': 'Edit Subscription',
    'fin.name': 'Name',
    'fin.amount': 'Amount',
    'fin.currency': 'Currency',
    'fin.cycle': 'Cycle',
    'fin.monthly': 'Monthly',
    'fin.yearly': 'Yearly',
    'fin.category': 'Category',
    'fin.due_day': 'Payment day',
    'fin.monthly_total': 'Monthly total',
    'fin.yearly_total': 'Yearly estimate',
    'fin.count': '{n} active subscription(s)',
    'fin.empty': 'No subscriptions yet.',
    'fin.per_month': '/ month',
    'fin.per_year': '/ year',
    'fin.delete_confirm': 'Delete this subscription?',
  },
  tr: {
    'mode.job': 'İş', 'mode.daily': 'Kişisel',
    'tab.projects': 'Projeler', 'tab.lists': 'Listeler', 'tab.tasks': 'Görevler',
    'tab.today': 'Bugün', 'tab.calendar': 'Takvim', 'tab.journal': 'Günlük',
    'tab.meetings': 'Toplantılar', 'tab.visits': 'Ziyaretler', 'tab.releases': 'Sürümler',
    'tab.more': 'Daha',
    'more.language': 'Dil', 'more.theme': 'Tema', 'more.drive': 'Google Drive',
    'more.section.pages': 'Sayfalar', 'more.section.settings': 'Ayarlar',
    'sidebar.projects': 'Projeler', 'sidebar.lists': 'Listeler',
    'sidebar.meetings': 'Toplantılar', 'sidebar.releases': 'Sürümler',
    'sidebar.entries': 'Girdiler',
    'btn.add': '+ Ekle', 'btn.cancel': 'İptal', 'btn.save_changes': 'Kaydet',
    'btn.edit': 'Düzenle', 'btn.delete': 'Sil',
    'btn.delete_project': 'Projeyi Sil', 'btn.delete_list': 'Listeyi Sil',
    'btn.today': 'Bugün',
    'btn.add_project': 'Proje Ekle', 'btn.add_list': 'Liste Ekle',
    'btn.add_task': 'Görev Ekle', 'btn.add_visit': 'Ziyaret Ekle',
    'btn.add_release': 'Sürüm Ekle', 'btn.add_version': 'Versiyon Ekle',
    'btn.add_issue': 'Sorun Ekle', 'btn.add_meeting': 'Toplantı Ekle',
    'modal.add_new_project': 'Yeni Proje', 'modal.add_new_list': 'Yeni Liste',
    'modal.edit_project': 'Projeyi Düzenle', 'modal.edit_list': 'Listeyi Düzenle',
    'modal.add_task': 'Görev Ekle', 'modal.edit_task': 'Görevi Düzenle',
    'modal.add_visit': 'Ziyaret Ekle', 'modal.edit_visit': 'Ziyareti Düzenle',
    'modal.add_release': 'Sürüm Ekle', 'modal.edit_release': 'Sürümü Düzenle',
    'modal.add_version': 'Versiyon Ekle', 'modal.edit_version': 'Versiyonu Düzenle',
    'modal.add_issue': 'Sorun Ekle', 'modal.edit_issue': 'Sorunu Düzenle',
    'modal.add_meeting': 'Toplantı Ekle', 'modal.edit_meeting': 'Toplantıyı Düzenle',
    'label.project_name': 'Proje Adı *', 'label.list_name': 'Liste Adı *',
    'label.task_title': 'Görev *', 'label.priority': 'Öncelik',
    'label.status': 'Durum', 'label.severity': 'Önem',
    'label.due_date': 'Bitiş Tarihi', 'label.tags': 'Etiketler',
    'label.description': 'Açıklama', 'label.category': 'Kategori',
    'label.location': 'Konum *', 'label.date': 'Tarih *',
    'label.reference': 'Referans', 'label.notes': 'Notlar',
    'label.changes': 'Değişiklikler', 'label.release_code': 'Sürüm Kodu *',
    'label.name': 'İsim', 'label.project_platform': 'Proje / Platform',
    'label.version': 'Versiyon *', 'label.issue_title': 'Sorun Başlığı *',
    'label.title': 'Başlık *', 'label.location_platform': 'Yer / Platform',
    'label.attendees': 'Katılımcılar', 'label.related': 'İlgili Proje',
    'label.filename': 'Dosya adı',
    'ph.project_name': 'Örn. Müşteri onboarding, Q4 launch...',
    'ph.list_name': 'Örn. Alışveriş, Okunacaklar, Filmler...',
    'ph.category': 'Örn. İş, Kişisel, Müşteriler...',
    'ph.description': 'Kapsam, çıktılar, paydaşlar...',
    'ph.task_title': 'Ne yapılacak?',
    'ph.location': 'Örn. Kore, Seul — Samsung HQ',
    'ph.reference': 'Proje, müşteri, varlık...',
    'ph.visit_notes': 'Amaç, gündem, ekip...',
    'ph.release_code': 'REL-2024-001 / A33-200007-R001',
    'ph.short_name': 'Kısa ad, örn. Walker Motor Controller',
    'ph.fw_desc': 'Amaç, platform, detay...',
    'ph.platform': 'Örn. Mobil uygulama, Walker, Atlas...',
    'ph.version': 'A33-200007-R001-V002',
    'ph.changes_lines': '- Denge algoritması güncellendi\n- Motor sürücü hatası düzeltildi\n- Yeni sensör desteği eklendi',
    'ph.cl_notes': 'Test notları, bilinen sorunlar...',
    'ph.issue_title': 'Sorunu kısaca tanımla...',
    'ph.meeting_title': 'Toplantı konusu...',
    'ph.meeting_loc': 'Örn. Teams, Ofis, Samsung HQ...',
    'ph.attendees': 'Örn. Batu, Ali, Mehmet...',
    'ph.related_project': 'Örn. Walker, KUKA...',
    'ph.note': 'Not yaz... (Ctrl+Enter ile kaydet)',
    'ph.action_item': 'Yeni aksiyon... (Enter ile ekle)',
    'ph.brainstorm_notes': 'Toplantı notları, kararlar, konuşulanlar...',
    'empty.select_project': 'Sol taraftan bir proje seç\nveya yeni bir proje ekle.',
    'empty.select_list': 'Sol taraftan bir liste seç\nveya yeni bir liste ekle.',
    'empty.select_release': 'Bir sürüm seç veya yeni ekle.',
    'empty.select_meeting': 'Bir toplantı seç veya yeni ekle.',
    'empty.no_projects': 'Henüz proje yok',
    'empty.no_lists': 'Henüz liste yok',
    'empty.no_releases': 'Henüz sürüm yok',
    'empty.no_meetings': 'Henüz toplantı yok',
    'empty.no_visits': 'Henüz planlanmış ziyaret yok.',
    'empty.no_versions': 'Henüz versiyon yok.',
    'empty.no_tasks_open': 'Açık görev yok.',
    'empty.no_tasks_today': 'Bugün için görev yok.',
    'empty.no_tasks_yet': 'Henüz görev yok.',
    'empty.no_tasks_add': 'Henüz görev yok. İlk görevini ekle!',
    'empty.no_issues': 'Kayıtlı sorun yok.',
    'empty.no_notes': 'Henüz not yok.',
    'empty.no_journal': 'Henüz girdi yok. Bugünden başla.',
    'empty.select_day': 'Bir gün seç',
    'filter.open': 'Açık', 'filter.today': 'Bugün', 'filter.all': 'Hepsi',
    'cal.meetings': 'Toplantılar', 'cal.visits': 'Ziyaretler', 'cal.notes': 'Notlar',
    'cal.notes_placeholder': 'Bu güne ait not...',
    'jrn.entries': 'Girdiler',
    'jrn.placeholder': 'Bu günü yaz... düşüncelerin, neler oldu, plan...',
    'jrn.saved': 'Kaydedildi',
    'bp.title': 'Bulut Yedekleme',
    'bp.subtitle_detected': 'Drive bulundu — tek tıkla bağlan',
    'bp.connect_button': 'Google Drive\'a Bağlan',
    'bp.no_drive_title': 'Google Drive bulunamadı.',
    'bp.no_drive_desc': 'Otomatik sync için Google Drive Desktop kurman lazım.',
    'bp.install_drive': 'Google Drive\'ı indir',
    'bp.install_link': 'google.com/drive/download',
    'bp.manual_folder': 'Manuel klasör seç',
    'bp.or_manual_folder': 'Veya manuel klasör seç',
    'bp.hint_drive': 'Veriler Drive\'da "B-Less" klasörüne yazılır, otomatik senkronize olur.',
    'bp.hint_install': 'Drive\'ı kurup, oturum açıp sync klasörü oluştuktan sonra uygulamayı yeniden aç.',
    'bp.last_sync': 'Son yedek',
    'bp.never': 'Henüz yok',
    'bp.just_now': 'Az önce',
    'bp.min_ago': '{n} dk önce',
    'bp.backup_now': 'Yedekle',
    'bp.restore': 'Geri Yükle',
    'bp.disconnect': 'Bağlantıyı Kes',
    'bp.disconnect_confirm': 'Bağlantıyı kes? Veriler local kalır, sync durur.',
    'bp.no_backup_found': 'Klasörde yedek dosyası bulunamadı.',
    'bp.connect_failed': 'Bağlanamadı: {msg}',
    'bp.restore_overwrite': 'Yedek bulundu ({date}, {n} proje).\n\nMevcut verilerin üzerine yazılsın mı?',
    'bp.restore_load': 'Yedek bulundu ({date}, {n} proje).\n\nVeriler yüklensin mi?',
    'bp.open_folder': 'Klasörü aç',
    'att.section': 'Ekler',
    'att.add': 'Dosya ekle',
    'att.empty': 'Ek yok',
    'att.too_big': '"{name}" çok büyük (max 25 MB)',
    'att.confirm_delete': 'Bu eki sil?',
    'att.desktop_only': 'Ekler sadece masaüstü uygulamada çalışır.',
    'att.signin_required': 'Dosya eklemek için Google Drive\'a giriş yap.',
    'att.failed': 'Kaydedilemedi: {msg}',
    'add_item.title': 'Space\'e ekle',
    'add_item.list': 'Liste', 'add_item.list_hint': 'Bir başlık altında görevler',
    'add_item.meeting': 'Toplantı', 'add_item.meeting_hint': 'Tek bir toplantının notları + aksiyonları',
    'add_item.visit': 'Ziyaret', 'add_item.visit_hint': 'Yer + tarih planla',
    'add_item.journal': 'Günlük', 'add_item.journal_hint': 'Gün-bazlı serbest girdiler',
    'cross.today': 'Bugün', 'cross.calendar': 'Takvim', 'cross.all_tasks': 'Tüm Görevler', 'cross.visits': 'Ziyaretler',
    'nav.spaces': 'Alanlar',
    'btn.add_short': '+ Ekle',
    'btn.save': 'Kaydet',
    'btn.today_star': '★ Bugün',
    'btn.add_to_today': '☆ Bugüne al',
    'btn.start_today_title': 'Bugün başla',
    'btn.remove_today_title': 'Bugünden kaldır',
    'aria.delete': 'Sil',
    'aria.completed': 'Tamamlandı',
    'ph.note_input': 'Not yaz... (Ctrl+Enter ile kaydet)',
    'due.today': 'bugün', 'due.tomorrow': 'yarın', 'due.yesterday': 'dün',
    'due.days_from_now': '{n}g sonra', 'due.days_ago': '{n}g geçti',
    'months.short': 'Oca,Şub,Mar,Nis,May,Haz,Tem,Ağu,Eyl,Eki,Kas,Ara',
    'meeting.notes_label': 'Notlar',
    'space.name_prompt': 'Space adı:',
    'label.space': 'Alan',
    'bp.sign_in': 'Google ile giriş yap',
    'bp.sign_out': 'Çıkış yap',
    'bp.signed_in_as': 'Bağlı hesap',
    'bp.web_subtitle': 'Google Drive\'ına yedek almak için giriş yap.',
    'bp.web_hint': 'Veriler Drive\'ında özel bir "B-Less" klasörüne yazılır. Masaüstü uygulamayı açtığında aynı dosyaları görürsün.',
    'bp.signing_in': 'Giriş yapılıyor…',
    'bp.sign_in_failed': 'Giriş başarısız: {msg}',
    'bp.desktop_only': 'Sadece masaüstü uygulamada çalışır.',
    'bp.filename': 'Dosya',
    'bp.rename': 'Yeniden adlandır',
    'bp.rename_prompt': 'Yeni yedek dosyası adı (mevcut dosya da yeniden adlandırılır):',
    'bp.custom_folder': 'Özel klasör',
    'bp.set_up': 'Yedek kur',
    'conf.delete_project': 'Bu projeyi ve tüm verilerini sil?',
    'conf.delete_list': 'Bu listeyi ve tüm verilerini sil?',
    'conf.delete_task': 'Bu görevi sil?',
    'conf.delete_release': 'Bu sürümü sil?',
    'conf.delete_meeting': 'Bu toplantıyı sil?',
    'conf.delete_visit': 'Bu ziyareti sil?',
    'conf.delete_issue': 'Bu sorunu sil?',
    'count.tasks_one': '1 aktif görev',
    'count.tasks_other': '{n} aktif görev',
    'count.tasks_zero': 'Aktif görev yok',
    'count.actions_short': '{open} aksiyon',
    'count.versions_one': '1 versiyon',
    'count.versions_other': '{n} versiyon',
    'count.open': '{n} açık',
    'task.tasks_label': 'Görevler',
    'task.issues_label': 'Bilinen Sorunlar',
    'task.actions_label': 'Aksiyon Maddeleri',
    'task.notes_label': 'Notlar',
    'task.changelog_label': 'Değişiklik Geçmişi',
    'btn.done': 'Tamam', 'btn.reopen': 'Yeniden Aç', 'btn.pending': 'Beklemede',
    'btn.activate': 'Aktifleştir', 'btn.investigating': 'İnceleniyor',
    'btn.resolved': 'Çözüldü',
    'visits.title': 'Ziyaretler', 'visits.subtitle': 'Planlanan ziyaretler ve seyahatler',
    'all_tasks.title': 'Tüm Görevler',
    'all_tasks.subtitle': 'Tüm projelerden görevler',
    'note.add': '+ Ekle', 'note.empty': 'Henüz not yok.',
    'days.future': '{n} gün sonra', 'days.past': '{n} gün önce', 'days.today': 'Bugün!',
    'priority.normal': 'Normal', 'priority.high': 'Yüksek', 'priority.critical': 'Kritik', 'priority.low': 'Düşük', 'priority.medium': 'Orta',
    'status.active': 'Aktif', 'status.pending': 'Beklemede', 'status.done': 'Tamam',
    'status.open': 'Açık', 'status.investigating': 'İnceleniyor', 'status.resolved': 'Çözüldü',
    'status.testing': 'Test', 'status.rc': 'RC', 'status.stable': 'Kararlı', 'status.deprecated': 'Eski',
  },
};

Object.assign(I18N.tr, {
  'add_item.finance': 'Harcamalar',
  'add_item.finance_hint': 'Abonelikler ve aylik giderler',
  'add_item.purchases': 'Satin Alimlar',
  'add_item.purchases_hint': 'Istek listesi ve satin alim takibi',
  'add_item.review': 'Ozetler',
  'add_item.review_hint': 'Haftalik ve aylik ozet notlar',
  'add_item.links': 'Linkler',
  'add_item.links_hint': 'Kaybetmek istemedigin URLler',
  'links.title':         'Linkler',
  'links.subtitle':      'Kaybolmasin istedigin linkler',
  'links.add':           '+ Link Ekle',
  'links.modal_add':     'Link Ekle',
  'links.modal_edit':    'Linki Duzenle',
  'links.empty':         'Henuz link yok. Yukaridaki butonla ekle.',
  'links.no_match':      'Aramana uygun link bulunamadi.',
  'links.confirm_delete':'Bu link silinsin mi?',
  'links.search_ph':     'Baslik, URL, etiket, not ara…',
  'links.f.url':         'URL',
  'links.f.title':       'Baslik',
  'links.f.tag':         'Etiket',
  'links.f.notes':       'Notlar',
  'reviews.title':         'Ozetler',
  'reviews.subtitle':      'Haftalik ve aylik ozet notlar',
  'reviews.tab.week':      'Haftalik',
  'reviews.tab.month':     'Aylik',
  'reviews.current_week':  '+ Bu hafta',
  'reviews.current_month': '+ Bu ay',
  'reviews.empty':         'Henuz kayit yok. Yukaridaki butonla baslat.',
  'reviews.no_entry':      'Kayit secili degil',
  'reviews.confirm_delete':'Bu ozet silinsin mi?',
  'reviews.saved':         'Kaydedildi',
  'reviews.week_label':    'Hafta',
  'reviews.placeholder':   'Kazanimlar, takiliklar, dersler, bir sonraki adim…',
  'more.section.tools': 'Araclar',
  'tools.title': 'Hesaplar',
  'tools.subtitle': 'Muhendislik hesap araclari',
  'tools.back': '< Listeye don',
  'purchases.title': 'Satin Alimlar',
  'purchases.subtitle': 'Istek listesi -> satin alimda -> tamamlandi',
  'purchases.add': '+ Satin Alim Ekle',
  'purchases.modal_add': 'Satin Alim Ekle',
  'purchases.modal_edit': 'Satin Alimi Duzenle',
  'purchases.empty': 'Henuz satin alim yok. Istek listene baslamak icin "+ Satin Alim Ekle"a bas.',
  'purchases.confirm_delete': 'Bu satin alimi sil?',
  'purchases.filter.all': 'Tumu',
  'purchases.status.wishlist': 'Istek listesi',
  'purchases.status.buying':   'Satin alimda',
  'purchases.status.done':     'Tamamlandi',
  'purchases.f.name':          'Ad',
  'purchases.f.status':        'Durum',
  'purchases.f.project':       'Ilgili proje',
  'purchases.f.project_none':  '- Yok -',
  'purchases.f.est':           'Tahmini fiyat',
  'purchases.f.actual':        'Gercek fiyat',
  'purchases.f.supplier':      'Tedarikci',
  'purchases.f.url':           'Link',
  'purchases.f.notes':         'Notlar',
  'purchases.f.date_request':  'Talep',
  'purchases.f.date_order':    'Siparis',
  'purchases.f.date_delivery': 'Teslim',
  'fin.title': 'Harcamalar',
  'fin.subtitle': 'Abonelikler ve aylik tekrar eden giderler',
  'fin.add_subscription': 'Abonelik Ekle',
  'fin.modal_add': 'Abonelik Ekle',
  'fin.modal_edit': 'Aboneligi Duzenle',
  'fin.name': 'Ad',
  'fin.amount': 'Tutar',
  'fin.currency': 'Para birimi',
  'fin.cycle': 'Dongu',
  'fin.monthly': 'Aylik',
  'fin.yearly': 'Yillik',
  'fin.category': 'Kategori',
  'fin.due_day': 'Odeme gunu',
  'fin.monthly_total': 'Aylik toplam',
  'fin.yearly_total': 'Yillik tahmini',
  'fin.count': '{n} aktif abonelik',
  'fin.empty': 'Henuz abonelik yok.',
  'fin.per_month': '/ ay',
  'fin.per_year': '/ yil',
  'fin.delete_confirm': 'Bu abonelik silinsin mi?',
  'fin.add_expense': 'Harcama Ekle',
  'fin.modal_expense_add': 'Harcama Ekle',
  'fin.modal_expense_edit': 'Harcamayi Duzenle',
  'fin.expenses_this_month': 'Bu ayki harcamalar',
  'fin.subscriptions': 'Abonelikler',
  'fin.expense_total': 'Bu ay harcama',
  'fin.empty_expenses': 'Bu ay henuz harcama yok.',
  'fin.auto_subscription': 'Otomatik abonelik',
  'fin.delete_expense_confirm': 'Bu harcama silinsin mi?',
});

Object.assign(I18N.en, {
  'fin.add_expense': 'Add Expense',
  'fin.modal_expense_add': 'Add Expense',
  'fin.modal_expense_edit': 'Edit Expense',
  'fin.expenses_this_month': 'This month expenses',
  'fin.subscriptions': 'Subscriptions',
  'fin.expense_total': 'This month spent',
  'fin.empty_expenses': 'No expenses this month yet.',
  'fin.auto_subscription': 'Automatic subscription',
  'fin.delete_expense_confirm': 'Delete this expense?',
});

// One-shot migration: copy any `karta-*` localStorage entries (from the previous
// app name) to the new `b-less-*` keys. Idempotent — the copy is skipped if the
// new key is already present, so re-running this on every load is safe.
(() => {
  const suffixes = ['', '-lang', '-theme', '-drive-user', '-backup-filename'];
  for (const suf of suffixes) {
    try {
      const oldKey = 'karta' + suf;
      const newKey = 'b-less' + suf;
      const v = localStorage.getItem(oldKey);
      if (v != null && localStorage.getItem(newKey) == null) {
        localStorage.setItem(newKey, v);
      }
    } catch {}
  }
})();

let currentLang = 'en';

function t(key, params) {
  let s = (I18N[currentLang] && I18N[currentLang][key]) ?? I18N.en[key] ?? key;
  if (params) {
    for (const k in params) s = s.replace(new RegExp('\\{' + k + '\\}', 'g'), params[k]);
  }
  return s;
}

function applyI18n() {
  document.documentElement.setAttribute('lang', currentLang);
  document.body.setAttribute('data-lang', currentLang);
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-ph]').forEach(el => { el.placeholder = t(el.dataset.i18nPh); });
  document.querySelectorAll('[data-i18n-title]').forEach(el => { el.title = t(el.dataset.i18nTitle); });
  if (typeof renderAll === 'function') renderAll();
  if (typeof BackupManager !== 'undefined' && BackupManager.refresh) BackupManager.refresh();
}

function setLang(l) {
  currentLang = l;
  localStorage.setItem('b-less-lang', l);
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  applyI18n();
}

// ── ICONS (Lucide-style) ───────────────────────────────
const ICO = {
  bot:        '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  botLg:      '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
  clipboard:  '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 2 7l10 5 10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>',
  plane:      '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
  chip:       '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="m3.27 6.96 8.73 5.05 8.73-5.05"/><path d="M12 22.08V12"/></svg>',
  users:      '<svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  usersAvatar:'<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  pin:        '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s-7-7-7-13a7 7 0 1 1 14 0c0 6-7 13-7 13z"/><circle cx="12" cy="9" r="2.5"/></svg>',
  calendar:   '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  group:      '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  close:      '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  check:      '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  checkSm:    '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  chevron:    '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>',
  search:     '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>',
  undo:       '<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-15-6.7L3 13"/></svg>',
  pause:      '<svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>',
  play:       '<svg viewBox="0 0 24 24" width="11" height="11" fill="currentColor" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M6 4 20 12 6 20Z"/></svg>',
  folder:     '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
};

// ── STATE ──────────────────────────────────────────────
// state.firmware (and state.currentFwId) may still exist in old saves/backups; we leave the data
// dormant so a restore doesn't lose it, but no UI surface reads it anymore.
let state = { robots: [], topics: [], fieldVisits: [], firmware: [], meetings: [], finance: { subscriptions: [], expenses: [] }, purchases: [], reviews: { week: {}, month: {} }, links: [], currentRobotId: null, currentTopicId: null, currentMeetingId: null };
let robotTab = 'tasks'; // 'tasks' | 'issues'
let topicTab = 'tasks';
let activeSection    = 'robots'; // 'robots' | 'topics'
let addingEntityType = 'robot';  // 'robot' | 'topic'
let editingVisitId     = null;
let editingRobotId     = null;
let editingTaskId      = null;
let editingIssueId     = null;
let editingMeetingId   = null;
let editingSubscriptionId = null;
let editingExpenseId = null;
let editingPurchaseId = null;
let purchasesFilter = 'all'; // 'all' | 'wishlist' | 'buying' | 'done'
let reviewPeriod = 'week';   // 'week' | 'month'
let currentReviewKey = null; // e.g. '2026-W19' or '2026-05'
let editingLinkId = null;
let linksFilter = '';        // free-text search
let financeSelectedMonth = ymd(new Date()).slice(0, 7);

const STORAGE_KEY = 'b-less';
// Two layers of legacy: 'karta' was the previous app name, 'ais-planner' the one before.
const LEGACY_STORAGE_KEY = 'karta';
const OLDEST_STORAGE_KEY = 'ais-planner';

function load() {
  try {
    // Prefer new key, walk back through legacy keys if only an older one exists
    let raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const fallback = localStorage.getItem(LEGACY_STORAGE_KEY) ||
                       localStorage.getItem(OLDEST_STORAGE_KEY);
      if (fallback) {
        localStorage.setItem(STORAGE_KEY, fallback);
        raw = fallback;
      }
    }
    if (raw) state = JSON.parse(raw) || state;
  } catch(e) {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw && !localStorage.getItem(STORAGE_KEY + '.corrupt')) {
        localStorage.setItem(STORAGE_KEY + '.corrupt', raw);
      }
    } catch(_) {}
    window.__bLessLoadFailed = true;
    alert('Saved planner data could not be loaded. The broken local copy was preserved as "b-less.corrupt"; restore from Google Drive or export it before making changes.');
  }
  migrateLegacyTopics();
}

// Merge old `state.topics` (Areas tab) into `state.robots` with category="Notes"
// One-shot: idempotent because state.topics ends up empty
function migrateLegacyTopics() {
  if (!state.topics || state.topics.length === 0) return;
  state.topics.forEach(topic => {
    state.robots.push({
      ...topic,
      id: topic.id || uid(),
      category: topic.category || 'Notes',
      tasks:  topic.tasks  || [],
      issues: topic.issues || [],
    });
  });
  state.topics = [];
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e) {}
}
function save() {
  if (window.__bLessLoadFailed) return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (typeof BackupManager !== 'undefined') BackupManager.onDataChange();
}
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

// ── TABS ───────────────────────────────────────────────
// Sub-pages reachable from "More" — when one is active, keep "More" highlighted
// in the bottom nav so the user has a clear way back.
const MORE_SUBTABS = new Set(['meetings', 'journal']);

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.section').forEach(s => s.classList.remove('active'));
    tab.classList.add('active');
    const sec = document.getElementById(tab.dataset.tab);
    if (sec) sec.classList.add('active');
    if (tab.dataset.tab === 'robots' || tab.dataset.tab === 'topics') {
      activeSection = tab.dataset.tab;
    }
    if (tab.dataset.tab === 'calendar')   renderCalendar();
    if (tab.dataset.tab === 'all-tasks')  renderAllTasks();
    if (MORE_SUBTABS.has(tab.dataset.tab)) {
      setBottomNavActive('more');
    } else {
      setBottomNavActive(tab.dataset.tab);
    }
    closeSpaceDrawer();
  });
});

function setBottomNavActive(key) {
  document.querySelectorAll('.bnav-btn').forEach(btn => {
    const btnKey = btn.dataset.mobileSpaces ? 'spaces' : (btn.dataset.cross || btn.dataset.tab);
    btn.classList.toggle('active', btnKey === key);
  });
}

function openSpaceDrawer() {
  document.body.classList.add('space-drawer-open');
  document.querySelectorAll('[data-mobile-spaces]').forEach(btn => {
    btn.classList.add('active');
    btn.setAttribute('aria-expanded', 'true');
  });
}

function closeSpaceDrawer() {
  document.body.classList.remove('space-drawer-open');
  document.querySelectorAll('[data-mobile-spaces]').forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
  });
}

function toggleSpaceDrawer() {
  if (document.body.classList.contains('space-drawer-open')) closeSpaceDrawer();
  else openSpaceDrawer();
}

document.querySelectorAll('[data-mobile-spaces]').forEach(btn => {
  btn.addEventListener('click', () => {
    setBottomNavActive('spaces');
    toggleSpaceDrawer();
  });
});

document.querySelectorAll('.bnav-btn[data-cross]').forEach(btn => {
  btn.addEventListener('click', () => showCrossView(btn.dataset.cross));
});

document.getElementById('space-drawer-backdrop')?.addEventListener('click', closeSpaceDrawer);
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSpaceDrawer();
});

document.getElementById('settings-nav-btn')?.addEventListener('click', () => {
  activateSection('more');
  setBottomNavActive('more');
  closeSpaceDrawer();
  document.querySelectorAll('.settings-nav-btn').forEach(btn => btn.classList.add('active'));
});

// "More" page cards: jump to the corresponding tab / open the corresponding control.
document.querySelectorAll('[data-go-tab]').forEach(card => {
  card.addEventListener('click', () => {
    const target = document.querySelector(`.tab[data-tab="${card.dataset.goTab}"]`);
    if (target) target.click();
  });
});
// More-page Drive trigger is now wired directly in BackupManager.initUI() so the
// user gesture is preserved (synthetic .click() forwarding here was blocking the
// OAuth popup on mobile browsers).

// ── HELPERS ────────────────────────────────────────────
function getCurrentContainer() {
  if (activeSection === 'topics') {
    return (state.topics || []).find(t => t.id === state.currentTopicId);
  }
  return state.robots.find(r => r.id === state.currentRobotId);
}
function renderCurrentDetail() {
  if (activeSection === 'topics') renderTopicDetail();
  else renderRobotDetail();
}

// ── PROJECT LIST (grouped by category, filtered by mode) ─
function renderRobotList() {
  const list = document.getElementById('robot-list');
  if (!list) return;
  const projects = projectsByMode();
  if (!projects.length) {
    const emptyKey = 'empty.no_lists';
    list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">${t(emptyKey)}</div>`;
    refreshCategoryDatalist();
    return;
  }

  // Group projects by category
  const groups = {};
  projects.forEach(robot => {
    const cat = (robot.category || '').trim() || 'Uncategorized';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(robot);
  });

  // Sort: alphabetical, "Uncategorized" last
  const cats = Object.keys(groups).sort((a, b) => {
    if (a === 'Uncategorized') return 1;
    if (b === 'Uncategorized') return -1;
    return a.localeCompare(b, 'tr');
  });

  state.collapsedCategories = state.collapsedCategories || {};

  list.innerHTML = cats.map(cat => {
    const collapsed = !!state.collapsedCategories[cat];
    const items = groups[cat];
    const itemsHtml = items.map(robot => {
      const active = robot.tasks.filter(t => t.status !== 'done').length;
      const isSelected = robot.id === state.currentRobotId;
      return `
        <div class="robot-item ${isSelected ? 'active' : ''}" data-id="${robot.id}">
          <div class="robot-avatar">${escapeHtml((robot.name || '?')[0].toUpperCase())}</div>
          <div class="robot-item-info">
            <div class="robot-item-name">${escapeHtml(robot.name)}</div>
            <div class="robot-item-count">${active === 0 ? t('count.tasks_zero') : (active === 1 ? t('count.tasks_one') : t('count.tasks_other', {n: active}))}</div>
          </div>
        </div>`;
    }).join('');
    return `
      <div class="cat-group ${collapsed ? 'collapsed' : ''}" data-cat="${escapeAttr(cat)}">
        <div class="cat-header">
          <span class="cat-chev">${ICO.chevron}</span>
          <span class="cat-name">${escapeHtml(cat)}</span>
          <span class="cat-count">${items.length}</span>
        </div>
        <div class="cat-items">${itemsHtml}</div>
      </div>`;
  }).join('');

  list.querySelectorAll('.cat-header').forEach(h => {
    h.addEventListener('click', () => {
      const cat = h.parentElement.dataset.cat;
      state.collapsedCategories[cat] = !state.collapsedCategories[cat];
      save();
      renderRobotList();
    });
  });

  list.querySelectorAll('.robot-item').forEach(item => {
    item.addEventListener('click', () => {
      state.currentRobotId = item.dataset.id;
      renderRobotList();
      renderRobotDetail();
    });
  });

  refreshCategoryDatalist();
}

// HTML attribute escape (for data-cat)
function escapeAttr(s) {
  return String(s).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/'/g,'&#39;').replace(/</g,'&lt;');
}

// Populate the modal's category datalist with existing categories (current mode only)
function refreshCategoryDatalist() {
  const dl = document.getElementById('categories-datalist');
  if (!dl) return;
  const cats = new Set();
  projectsByMode().forEach(r => { if (r.category && r.category.trim()) cats.add(r.category.trim()); });
  dl.innerHTML = Array.from(cats).sort((a,b)=>a.localeCompare(b,'tr')).map(c => `<option value="${escapeAttr(c)}"></option>`).join('');
}

// ── ROBOT DETAIL ───────────────────────────────────────
function renderRobotDetail() {
  const content = document.getElementById('robot-content');
  const robot = getCurrentContainer();
  const isDaily = getMode() === 'daily';
  const robotsSection = document.getElementById('robots');

  if (!robot) {
    if (robotsSection) robotsSection.removeAttribute('data-detail-open');
    const emptyMsg = t('empty.select_list').replace(/\n/g, '<br>');
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${ICO.botLg}</div>
        <p>${emptyMsg}</p>
      </div>`;
    return;
  }
  if (robotsSection) robotsSection.setAttribute('data-detail-open', 'true');

  const activeTasks  = robot.tasks.filter(t => t.status === 'active');
  const pendingTasks = robot.tasks.filter(t => t.status === 'pending');
  const doneTasks    = robot.tasks.filter(t => t.status === 'done');
  const orderedTasks = [...activeTasks, ...pendingTasks, ...doneTasks];

  const issues = robot.issues || [];
  const openIssues = issues.filter(i => i.status !== 'resolved');

  if (isDaily && robotTab === 'issues') robotTab = 'tasks';

  const issuesTabBtn = isDaily ? '' : `
      <button class="inner-tab ${robotTab==='issues'?'active':''}" onclick="switchRobotTab('issues')">
        ${t('task.issues_label')} <span class="count-pill issues-pill">${openIssues.length}</span>
      </button>`;

  content.innerHTML = `
    <div class="robot-detail-header">
      <button class="robot-detail-back" onclick="clearRobotSelection()" aria-label="Back">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg>
      </button>
      <div>
        <div class="robot-detail-name">${escapeHtml(robot.name)}</div>
        ${robot.description ? `<div class="robot-detail-desc">${escapeHtml(robot.description)}</div>` : ''}
      </div>
      <div class="btn-group">
        <button class="btn-sm" onclick="editRobot('${robot.id}')">${t('btn.edit')}</button>
        <button class="btn-sm danger" onclick="deleteRobot('${robot.id}')">${t('btn.delete_list')}</button>
      </div>
    </div>

    <div class="inner-tabs">
      <button class="inner-tab ${robotTab==='tasks'?'active':''}" onclick="switchRobotTab('tasks')">
        ${t('task.tasks_label')} <span class="count-pill">${activeTasks.length + pendingTasks.length}</span>
      </button>
      ${issuesTabBtn}
    </div>

    <div id="inner-tab-content">
      ${robotTab === 'tasks' ? renderTabTasks(orderedTasks, activeTasks, pendingTasks) : ''}
      ${robotTab === 'issues' && !isDaily ? renderTabIssues(issues) : ''}
    </div>
  `;
}

window.switchRobotTab = function(tab) {
  if (tab === 'brainstorm') tab = 'tasks';
  if (tab === 'issues' && getMode() === 'daily') tab = 'tasks';
  robotTab = tab;
  renderRobotDetail();
};

function renderTabTasks(ordered, activeTasks, pendingTasks) {
  const openCount = activeTasks.length + pendingTasks.length;
  return `
    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('task.tasks_label')} <span class="count-pill">${t('count.open', { n: openCount })}</span></div>
        <button class="btn-add" onclick="openTaskModal()">+ ${t('btn.add_task')}</button>
      </div>
      <div id="task-list">
        ${ordered.length === 0
          ? `<div style="color:var(--muted);font-size:14px;padding:8px 0;">${t('empty.no_tasks_add')}</div>`
          : ordered.map(t => renderTask(t)).join('')}
      </div>
    </div>
  `;
}

function renderTabBrainstorm(robot) {
  return `
    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">Brainstorm</div>
      </div>
      <div class="brainstorm-wrap">
        <textarea class="brainstorm-area" id="brainstorm-area"
          placeholder="Ideas, notes, questions, hypotheses... write freely here."
        >${robot.brainstorm || ''}</textarea>
        <div class="save-indicator" id="save-indicator">Saved</div>
      </div>
    </div>
  `;
}

// ── ISSUES ─────────────────────────────────────────────
function renderTabIssues(issues) {
  const open       = issues.filter(i => i.status === 'open');
  const invest     = issues.filter(i => i.status === 'investigating');
  const resolved   = issues.filter(i => i.status === 'resolved');
  const ordered    = [...open, ...invest, ...resolved];

  return `
    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('task.issues_label')} <span class="count-pill issues-pill">${t('count.open', { n: open.length + invest.length })}</span></div>
        <button class="btn-add" onclick="openIssueModal()">+ ${t('btn.add_issue')}</button>
      </div>
      <div id="issue-list">
        ${ordered.length === 0
          ? `<div style="color:var(--muted);font-size:14px;padding:8px 0;">${t('empty.no_issues')}</div>`
          : ordered.map(i => renderIssue(i)).join('')}
      </div>
    </div>
  `;
}

function renderIssue(issue) {
  const severityLabel = { low:'Low', medium:'Medium', high:'High', critical:'Critical' };
  const statusLabel   = { open:'Open', investigating:'Investigating', resolved:'Resolved' };
  return `
    <div class="task-item ${issue.status} ${issue.expanded ? 'expanded' : ''}" id="issue-${issue.id}">
      <div class="task-header" onclick="toggleIssue('${issue.id}')">
        <div class="issue-dot ${issue.status}"></div>
        <div class="task-title-text">${escapeHtml(issue.title)}</div>
        <span class="severity-tag ${issue.severity}">${severityLabel[issue.severity]}</span>
        <span class="issue-status-tag ${issue.status}">${statusLabel[issue.status]}</span>
        ${(issue.notebook||[]).length > 0 ? `<span class="nb-count">${issue.notebook.length}</span>` : ''}
        <span class="expand-chevron">${ICO.chevron}</span>
      </div>
      <div class="task-body">
        <div class="task-body-inner">
          ${renderIssueNotebook(issue)}
          ${renderAttachments('issue', issue.id, issue.attachments)}
          <div class="task-actions">
            ${issue.status === 'open'          ? `<button class="btn-sm" onclick="setIssueStatus('${issue.id}','investigating')">${ICO.search}<span>Investigating</span></button>` : ''}
            ${issue.status === 'investigating' ? `<button class="btn-sm" onclick="setIssueStatus('${issue.id}','open')">${ICO.undo}<span>Reopen</span></button>` : ''}
            ${issue.status !== 'resolved'      ? `<button class="btn-sm success" onclick="setIssueStatus('${issue.id}','resolved')">${ICO.check}<span>Resolved</span></button>` : ''}
            ${issue.status === 'resolved'      ? `<button class="btn-sm" onclick="setIssueStatus('${issue.id}','open')">${ICO.undo}<span>Reopen</span></button>` : ''}
            <button class="btn-sm" onclick="editIssue('${issue.id}')">Edit</button>
            <button class="btn-sm danger" onclick="deleteIssue('${issue.id}')">Delete</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderIssueNotebook(issue) {
  const entries = issue.notebook || [];
  const entriesHtml = entries.length === 0
    ? `<div class="nb-empty">${t('empty.no_notes')}</div>`
    : entries.map(e => `
        <div class="nb-entry" id="nbentry-${e.id}">
          <div class="nb-entry-meta">
            <span class="nb-entry-time">${formatNoteTime(e.createdAt)}</span>
            <button class="nb-delete-btn" onclick="deleteIssueNoteEntry('${issue.id}','${e.id}')" aria-label="${t('aria.delete')}">${ICO.close}</button>
          </div>
          <div class="nb-entry-text">${renderMarkdown(e.text)}</div>
        </div>
      `).join('');
  return `
    <div class="notebook" id="issue-notebook-${issue.id}">
      <div class="nb-entries">${entriesHtml}</div>
      <div class="nb-input-row">
        <textarea class="nb-input" id="issue-nb-input-${issue.id}"
          placeholder="${t('ph.note_input')}"
          onkeydown="issueNbKeydown(event,'${issue.id}')"
          rows="4"
        ></textarea>
        <button class="nb-add-btn" onclick="addIssueNoteEntry('${issue.id}')">${t('btn.add_short')}</button>
      </div>
    </div>
  `;
}

window.toggleIssue = function(id) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === id);
  issue.expanded = !issue.expanded;
  save();
  const el = document.getElementById('issue-' + id);
  el.classList.toggle('expanded', issue.expanded);
};

window.setIssueStatus = function(id, status) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === id);
  issue.status = status;
  save();
  renderCurrentDetail();
};

window.deleteIssue = function(id) {
  if (!confirm(t('conf.delete_issue'))) return;
  const robot = getCurrentContainer();
  robot.issues = (robot.issues||[]).filter(i => i.id !== id);
  save();
  renderCurrentDetail();
};

window.addIssueNoteEntry = function(issueId) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === issueId);
  const input = document.getElementById('issue-nb-input-' + issueId);
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  if (!issue.notebook) issue.notebook = [];
  issue.notebook.push({ id: uid(), text, createdAt: Date.now() });
  save();
  const nb = document.getElementById('issue-notebook-' + issueId);
  if (nb) nb.outerHTML = renderIssueNotebook(issue);
  const countEl = document.querySelector(`#issue-${issueId} .nb-count`);
  const chevron = document.querySelector(`#issue-${issueId} .expand-chevron`);
  if (issue.notebook.length > 0) {
    if (countEl) countEl.textContent = issue.notebook.length;
    else if (chevron) {
      const badge = document.createElement('span');
      badge.className = 'nb-count';
      badge.textContent = issue.notebook.length;
      chevron.before(badge);
    }
  }
};

window.issueNbKeydown = function(e, issueId) {
  if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); addIssueNoteEntry(issueId); }
};

window.deleteIssueNoteEntry = function(issueId, entryId) {
  const robot = getCurrentContainer();
  const issue = (robot.issues||[]).find(i => i.id === issueId);
  issue.notebook = (issue.notebook||[]).filter(e => e.id !== entryId);
  save();
  const nb = document.getElementById('issue-notebook-' + issueId);
  if (nb) nb.outerHTML = renderIssueNotebook(issue);
  const countEl = document.querySelector(`#issue-${issueId} .nb-count`);
  if (countEl) {
    if (issue.notebook.length === 0) countEl.remove();
    else countEl.textContent = issue.notebook.length;
  }
};

function formatNoteTime(ts) {
  const d = new Date(ts);
  const pad = n => String(n).padStart(2, '0');
  return `${d.getDate()} ${['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'][d.getMonth()]} ${d.getFullYear()} · ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function renderNotebook(task) {
  const entries = task.notebook || [];
  const entriesHtml = entries.length === 0
    ? `<div class="nb-empty">${t('empty.no_notes')}</div>`
    : entries.map(e => e.editing ? `
        <div class="nb-entry nb-editing" id="nbentry-${e.id}">
          <div class="nb-entry-meta">
            <span class="nb-entry-time">${formatNoteTime(e.createdAt)}</span>
            <span class="nb-entry-actions">
              <button class="nb-save-btn" onclick="saveEditedNoteEntry('${task.id}','${e.id}')">${t('btn.save')}</button>
              <button class="nb-cancel-btn" onclick="cancelEditNoteEntry('${task.id}','${e.id}')">${t('btn.cancel')}</button>
            </span>
          </div>
          <textarea class="nb-edit-input" id="nb-edit-input-${task.id}-${e.id}"
            onkeydown="editNbKeydown(event,'${task.id}','${e.id}')"
            rows="4">${escapeHtml(e.text)}</textarea>
        </div>
      ` : `
        <div class="nb-entry" id="nbentry-${e.id}">
          <div class="nb-entry-meta">
            <span class="nb-entry-time">${formatNoteTime(e.createdAt)}</span>
            <span class="nb-entry-actions">
              <button class="nb-edit-btn" onclick="editNoteEntry('${task.id}','${e.id}')">${t('btn.edit')}</button>
              <button class="nb-delete-btn" onclick="deleteNoteEntry('${task.id}','${e.id}')" aria-label="${t('aria.delete')}">${ICO.close}</button>
            </span>
          </div>
          <div class="nb-entry-text">${renderMarkdown(e.text)}</div>
        </div>
      `).join('');

  return `
    <div class="notebook" id="notebook-${task.id}">
      <div class="nb-entries">${entriesHtml}</div>
      <div class="nb-input-row">
        <textarea class="nb-input" id="nb-input-${task.id}"
          placeholder="${t('ph.note_input')}"
          onkeydown="nbKeydown(event,'${task.id}')"
          rows="4"
        ></textarea>
        <button class="nb-add-btn" onclick="addNoteEntry('${task.id}')">${t('btn.add_short')}</button>
      </div>
    </div>
  `;
}

function isToday(iso) {
  if (!iso) return false;
  const d = new Date(iso + 'T00:00:00');
  const t = new Date(); t.setHours(0,0,0,0);
  return d.getTime() === t.getTime();
}
window.snoozeTask = function(taskId, days) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  // Anchor on existing due date if it's in the future, otherwise on today —
  // so a "+1d" on an overdue task moves it to tomorrow, not still-overdue.
  const today = new Date(); today.setHours(0,0,0,0);
  let base = today;
  if (task.dueDate) {
    const d = new Date(task.dueDate + 'T00:00:00');
    if (d > today) base = d;
  }
  const next = new Date(base.getTime() + days * 86400000);
  task.dueDate = next.toISOString().slice(0, 10);
  if (task.status === 'pending') task.status = 'active';
  save();
  renderCurrentDetail();
};

window.assignToday = function(taskId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  if (isToday(task.dueDate)) {
    task.dueDate = null;        // toggle off
  } else {
    task.dueDate = new Date().toISOString().slice(0, 10);
    if (task.status === 'pending') task.status = 'active';
  }
  save();
  renderCurrentDetail();
};
function dueClass(iso, status) {
  if (!iso || status === 'done') return '';
  const today = new Date(); today.setHours(0,0,0,0);
  const d = new Date(iso + 'T00:00:00');
  if (d < today) return 'overdue';
  if (d.getTime() === today.getTime()) return 'today';
  return '';
}
function formatDueShort(iso) {
  if (!iso) return '';
  const d = new Date(iso + 'T00:00:00');
  const today = new Date(); today.setHours(0,0,0,0);
  const diff = Math.round((d - today) / 86400000);
  if (diff === 0) return t('due.today');
  if (diff === 1) return t('due.tomorrow');
  if (diff === -1) return t('due.yesterday');
  if (diff > 1 && diff < 7) return t('due.days_from_now', { n: diff });
  if (diff < 0)  return t('due.days_ago', { n: -diff });
  const months = t('months.short').split(',');
  return `${d.getDate()} ${months[d.getMonth()]}`;
}

function renderTask(task) {
  const subs = task.subtasks || [];
  const subDone = subs.filter(s => s.done).length;
  return `
    <div class="task-item ${task.status} ${task.expanded ? 'expanded' : ''}" id="task-${task.id}">
      <div class="task-header" onclick="toggleTask('${task.id}')">
        <div class="task-dot ${task.status}"></div>
        <div class="task-title-text">${escapeHtml(task.title)}</div>
        <div class="task-tags">
          ${(task.tags || []).map(tg => `<span class="task-label-chip" data-tag="${escapeAttr(tg)}">${escapeHtml(tg)}</span>`).join('')}
          ${task.dueDate ? `<span class="task-due ${dueClass(task.dueDate, task.status)}">${formatDueShort(task.dueDate)}</span>` : ''}
          ${task.priority !== 'normal' ? `<span class="priority-tag ${task.priority}">${task.priority}</span>` : ''}
          <span class="status-tag ${task.status}">${task.status}</span>
        </div>
        <span class="expand-chevron">${ICO.chevron}</span>
      </div>
      <div class="task-body">
        <div class="task-body-inner">
          <div class="task-actions-row">
            ${task.status !== 'done'    ? `<button class="btn-sm success" onclick="event.stopPropagation();setStatus('${task.id}','done')">${ICO.check}<span>Done</span></button>` : ''}
            ${task.status === 'done'    ? `<button class="btn-sm" onclick="event.stopPropagation();setStatus('${task.id}','active')">${ICO.undo}<span>Reopen</span></button>` : ''}
            ${task.status !== 'done'    ? `<button class="btn-sm ${isToday(task.dueDate) ? 'active-toggle' : ''}" onclick="event.stopPropagation();assignToday('${task.id}')" title="${isToday(task.dueDate) ? t('btn.remove_today_title') : t('btn.start_today_title')}">${isToday(task.dueDate) ? t('btn.today_star') : t('btn.add_to_today')}</button>` : ''}
            ${task.status !== 'done'    ? `<button class="btn-sm" onclick="event.stopPropagation();snoozeTask('${task.id}',1)" title="Push to tomorrow">+1d</button>` : ''}
            ${task.status !== 'done'    ? `<button class="btn-sm" onclick="event.stopPropagation();snoozeTask('${task.id}',7)" title="Push by a week">+1w</button>` : ''}
            ${task.status === 'active'  ? `<button class="btn-sm" onclick="event.stopPropagation();setStatus('${task.id}','pending')">${ICO.pause}<span>Pending</span></button>` : ''}
            ${task.status === 'pending' ? `<button class="btn-sm" onclick="event.stopPropagation();setStatus('${task.id}','active')">${ICO.play}<span>Activate</span></button>` : ''}
            <button class="btn-sm" onclick="event.stopPropagation();editTask('${task.id}')">Edit</button>
            <button class="btn-sm danger" onclick="event.stopPropagation();deleteTask('${task.id}')">Delete</button>
          </div>
          ${renderSubtasks(task)}
          ${renderNotebook(task)}
          ${renderAttachments('task', task.id, task.attachments)}
        </div>
      </div>
    </div>
  `;
}

// ── SUBTASKS ────────────────────────────────────────────
function renderSubtasks(task) {
  const subs = task.subtasks || [];
  const items = subs.map(s => `
    <div class="subtask ${s.done ? 'done' : ''}" data-sub-id="${s.id}">
      <button class="subtask-check ${s.done ? 'checked' : ''}" onclick="toggleSubtask('${task.id}','${s.id}')" aria-label="Toggle">
        ${s.done ? ICO.checkSm : ''}
      </button>
      <span class="subtask-text">${escapeHtml(s.title)}</span>
      <button class="subtask-del" onclick="deleteSubtask('${task.id}','${s.id}')" aria-label="Delete">${ICO.close}</button>
    </div>
  `).join('');
  return `
    <div class="sub-section">
      <div class="sub-section-head">
        <span class="sub-label">Subtasks${subs.length ? ` <span class="count-pill">${subs.filter(s=>s.done).length}/${subs.length}</span>` : ''}</span>
      </div>
      ${items ? `<div class="sub-list">${items}</div>` : ''}
      <div class="sub-add-row">
        <input type="text" class="sub-add-input" id="sub-add-${task.id}"
          placeholder="Add a subtask"
          enterkeyhint="done"
          onkeydown="if(event.key==='Enter'){event.preventDefault();addSubtask('${task.id}')}" />
        <button type="button" class="sub-add-btn" onclick="addSubtask('${task.id}')" aria-label="Add subtask">+</button>
      </div>
    </div>
  `;
}

window.addSubtask = function(taskId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const input = document.getElementById('sub-add-' + taskId);
  const title = input ? input.value.trim() : '';
  if (!title) { input?.focus(); return; }
  if (!task.subtasks) task.subtasks = [];
  task.subtasks.push({ id: uid(), title, done: false, createdAt: Date.now() });
  save();
  renderCurrentDetail();
};

window.toggleSubtask = function(taskId, subId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  const sub = task && (task.subtasks || []).find(s => s.id === subId);
  if (!sub) return;
  sub.done = !sub.done;
  save();
  renderCurrentDetail();
};

window.deleteSubtask = function(taskId, subId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  task.subtasks = (task.subtasks || []).filter(s => s.id !== subId);
  save();
  renderCurrentDetail();
};

// Task expand/collapse
window.toggleTask = function(id) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === id);
  task.expanded = !task.expanded;
  save();
  // Toggle DOM directly for snappiness
  const el = document.getElementById('task-' + id);
  el.classList.toggle('expanded', task.expanded);
};

window.addNoteEntry = function(taskId) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === taskId);
  const input = document.getElementById('nb-input-' + taskId);
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  if (!task.notebook) task.notebook = [];
  task.notebook.push({ id: uid(), text, createdAt: Date.now() });
  save();
  // Re-render only the notebook part for speed
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
  else renderCurrentDetail();
  // Re-render the note count badge in the header
  const countEl = document.querySelector(`#task-${taskId} .nb-count`);
  const expandChevron = document.querySelector(`#task-${taskId} .expand-chevron`);
  if (task.notebook.length > 0) {
    if (countEl) { countEl.textContent = task.notebook.length; }
    else if (expandChevron) {
      const badge = document.createElement('span');
      badge.className = 'nb-count';
      badge.textContent = task.notebook.length;
      expandChevron.before(badge);
    }
  }
};

window.nbKeydown = function(e, taskId) {
  if (e.key === 'Enter' && e.ctrlKey) { e.preventDefault(); addNoteEntry(taskId); }
};

window.editNbKeydown = function(e, taskId, entryId) {
  if (e.key === 'Enter' && e.ctrlKey) {
    e.preventDefault(); saveEditedNoteEntry(taskId, entryId);
  }
};

window.editNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const entry = (task.notebook || []).find(e => e.id === entryId);
  if (!entry) return;
  entry.editing = true;
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
};

window.cancelEditNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const entry = (task.notebook || []).find(e => e.id === entryId);
  if (!entry) return;
  delete entry.editing;
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
};

window.saveEditedNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === taskId);
  if (!task) return;
  const entry = (task.notebook || []).find(e => e.id === entryId);
  if (!entry) return;
  const input = document.getElementById(`nb-edit-input-${taskId}-${entryId}`);
  if (!input) return;
  const text = input.value.trim();
  if (!text) { input.focus(); return; }
  entry.text = text;
  delete entry.editing;
  save();
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
};

window.deleteNoteEntry = function(taskId, entryId) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === taskId);
  task.notebook = (task.notebook || []).filter(e => e.id !== entryId);
  save();
  const nb = document.getElementById('notebook-' + taskId);
  if (nb) nb.outerHTML = renderNotebook(task);
  // update count badge
  const countEl = document.querySelector(`#task-${taskId} .nb-count`);
  if (countEl) {
    if (task.notebook.length === 0) countEl.remove();
    else countEl.textContent = task.notebook.length;
  }
};

window.setStatus = function(id, status) {
  const robot = getCurrentContainer();
  const task = robot.tasks.find(t => t.id === id);
  task.status = status;
  // Stamp completion time on transitions into done so the streak widget can
  // count what was finished in the last N days. Cleared on reopen.
  if (status === 'done') task.completedAt = Date.now();
  else delete task.completedAt;
  save();
  renderCurrentDetail();
  if (activeSection === 'topics') renderTopicList(); else renderRobotList();
};

window.deleteTask = function(id) {
  if (!confirm(t('conf.delete_task'))) return;
  const robot = getCurrentContainer();
  robot.tasks = robot.tasks.filter(t => t.id !== id);
  save();
  renderCurrentDetail();
  if (activeSection === 'topics') renderTopicList(); else renderRobotList();
};

window.deleteRobot = function(id) {
  if (!confirm(t('conf.delete_list'))) return;
  state.robots = state.robots.filter(r => r.id !== id);
  if (state.currentRobotId === id) state.currentRobotId = null;
  save();
  renderRobotList();
  renderRobotDetail();
};

// Mobile master-detail: clear the active project so the list takes over the screen again.
window.clearRobotSelection = function() {
  state.currentRobotId = null;
  save();
  renderRobotList();
  renderRobotDetail();
};

window.deleteTopic = function(id) {
  if (!confirm(t('conf.delete_list'))) return;
  state.topics = (state.topics||[]).filter(t => t.id !== id);
  if (state.currentTopicId === id) state.currentTopicId = null;
  save();
  renderTopicList();
  renderTopicDetail();
};

window.editTopic = function(id) {
  const topic = (state.topics||[]).find(t => t.id === id);
  if (!topic) return;
  addingEntityType = 'topic';
  editingRobotId = id;
  document.getElementById('robot-name').value = topic.name;
  document.getElementById('robot-desc').value = topic.description || '';
  document.querySelector('#modal-robot h3').textContent = t('modal.edit_list');
  document.getElementById('save-robot').textContent = t('btn.save_changes');
  document.getElementById('robot-name-label').textContent = t('label.list_name');
  openModal('modal-robot');
  setTimeout(() => document.getElementById('robot-name').focus(), 50);
};

window.switchTopicTab = function(tab) {
  if (tab === 'brainstorm') tab = 'tasks';
  topicTab = tab;
  renderTopicDetail();
};

// ── TOPIC LIST ─────────────────────────────────────────
function renderTopicList() {
  const list = document.getElementById('topic-list');
  if (!list) return;
  const topics = state.topics || [];
  if (!topics.length) {
    list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">No areas yet</div>`;
    return;
  }
  list.innerHTML = topics.map(topic => {
    const active = topic.tasks.filter(t => t.status !== 'done').length;
    const isSelected = topic.id === state.currentTopicId;
    return `
      <div class="robot-item ${isSelected ? 'active' : ''}" data-id="${topic.id}">
        <div class="robot-avatar" style="background:var(--surface-3)">${escapeHtml((topic.name || '?')[0].toUpperCase())}</div>
        <div class="robot-item-info">
          <div class="robot-item-name">${escapeHtml(topic.name)}</div>
          <div class="robot-item-count">${active === 0 ? t('count.tasks_zero') : (active === 1 ? t('count.tasks_one') : t('count.tasks_other', {n: active}))}</div>
        </div>
      </div>
    `;
  }).join('');
  list.querySelectorAll('.robot-item').forEach(item => {
    item.addEventListener('click', () => {
      state.currentTopicId = item.dataset.id;
      renderTopicList();
      renderTopicDetail();
    });
  });
}

// ── TOPIC DETAIL ───────────────────────────────────────
function renderTopicDetail() {
  const content = document.getElementById('topic-content');
  if (!content) return;
  const topic = (state.topics||[]).find(t => t.id === state.currentTopicId);
  if (!topic) {
    content.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">${ICO.clipboard}</div>
        <p>Select an area or add a new one.</p>
      </div>`;
    return;
  }
  const activeTasks  = topic.tasks.filter(t => t.status === 'active');
  const pendingTasks = topic.tasks.filter(t => t.status === 'pending');
  const doneTasks    = topic.tasks.filter(t => t.status === 'done');
  const orderedTasks = [...activeTasks, ...pendingTasks, ...doneTasks];
  const issues = topic.issues || [];
  const openIssues = issues.filter(i => i.status !== 'resolved');

  content.innerHTML = `
    <div class="robot-detail-header">
      <div>
        <div class="robot-detail-name">${escapeHtml(topic.name)}</div>
        ${topic.description ? `<div class="robot-detail-desc">${escapeHtml(topic.description)}</div>` : ''}
      </div>
      <div class="btn-group">
        <button class="btn-sm" onclick="editTopic('${topic.id}')">Edit</button>
        <button class="btn-sm danger" onclick="deleteTopic('${topic.id}')">Delete</button>
      </div>
    </div>
    <div class="inner-tabs">
      <button class="inner-tab ${topicTab==='tasks'?'active':''}" onclick="switchTopicTab('tasks')">
        Tasks <span class="count-pill">${activeTasks.length + pendingTasks.length}</span>
      </button>
      <button class="inner-tab ${topicTab==='issues'?'active':''}" onclick="switchTopicTab('issues')">
        Known Issues <span class="count-pill issues-pill">${openIssues.length}</span>
      </button>
    </div>
    <div id="inner-tab-content">
      ${topicTab === 'tasks'  ? renderTabTasks(orderedTasks, activeTasks, pendingTasks) : ''}
      ${topicTab === 'issues' ? renderTabIssues(issues) : ''}
    </div>
  `;
}

// ── EDIT FUNCTIONS ─────────────────────────────────────
window.editRobot = function(id) {
  const robot = state.robots.find(r => r.id === id);
  if (!robot) return;
  addingEntityType = 'robot';
  editingRobotId = id;
  document.getElementById('robot-name').value = robot.name;
  document.getElementById('robot-desc').value = robot.description || '';
  const catEl = document.getElementById('robot-category');
  if (catEl) catEl.value = robot.category || '';
  document.querySelector('#modal-robot h3').textContent     = t('modal.edit_list');
  document.getElementById('save-robot').textContent          = t('btn.save_changes');
  document.getElementById('robot-name-label').textContent    = t('label.list_name');
  refreshCategoryDatalist();
  // Pre-select the Space that currently holds this list
  if (typeof refreshSpaceSelect === 'function') {
    const sp = (typeof findSpaceOfRobot === 'function') ? findSpaceOfRobot(id) : null;
    refreshSpaceSelect(sp ? sp.id : (state.spaces && state.spaces[0] && state.spaces[0].id));
  }
  openModal('modal-robot');
  setTimeout(() => document.getElementById('robot-name').focus(), 50);
};

window.editTask = function(id) {
  const robot = getCurrentContainer();
  const task = robot && robot.tasks.find(t => t.id === id);
  if (!task) return;
  editingTaskId = id;
  document.getElementById('task-title').value = task.title;
  resetRadio('task-priority-group', task.priority || 'normal');
  resetRadio('task-status-group', task.status || 'active');
  initRadioGroup('task-priority-group');
  initRadioGroup('task-status-group');
  const dd = document.getElementById('task-due-date');
  if (dd) dd.value = task.dueDate || '';
  const ti = document.getElementById('task-tags-input');
  if (ti) ti.value = (task.tags || []).join(', ');
  renderTagPicker(task.tags || []);
  document.querySelector('#modal-task h3').textContent = t('modal.edit_task');
  document.getElementById('save-task').textContent = t('btn.save_changes');
  openModal('modal-task');
  setTimeout(() => document.getElementById('task-title').focus(), 50);
};

window.editIssue = function(id) {
  const robot = getCurrentContainer();
  const issue = robot && (robot.issues||[]).find(i => i.id === id);
  if (!issue) return;
  editingIssueId = id;
  document.getElementById('issue-title').value = issue.title;
  resetRadio('issue-severity-group', issue.severity || 'low');
  resetRadio('issue-status-group', issue.status === 'resolved' ? 'open' : (issue.status || 'open'));
  initRadioGroup('issue-severity-group');
  initRadioGroup('issue-status-group');
  document.querySelector('#modal-issue h3').textContent = t('modal.edit_issue');
  document.getElementById('save-issue').textContent = t('btn.save_changes');
  openModal('modal-issue');
  setTimeout(() => document.getElementById('issue-title').focus(), 50);
};

window.editVisit = function(id) {
  const visit = state.fieldVisits.find(v => v.id === id);
  if (!visit) return;
  editingVisitId = id;
  document.getElementById('visit-location').value = visit.location;
  document.getElementById('visit-date').value = visit.date;
  document.getElementById('visit-robot').value = visit.robot || '';
  document.getElementById('visit-notes').value = visit.notes || '';
  document.querySelector('#modal-visit h3').textContent = t('modal.edit_visit');
  document.getElementById('save-visit').textContent = t('btn.save_changes');
  openModal('modal-visit');
  setTimeout(() => document.getElementById('visit-location').focus(), 50);
};

// Brainstorm auto-save
let bsTimer;
function attachBrainstorm(entityId) {
  const area = document.getElementById('brainstorm-area');
  const indicator = document.getElementById('save-indicator');
  if (!area) return;
  area.addEventListener('input', () => {
    clearTimeout(bsTimer);
    bsTimer = setTimeout(() => {
      const entity = state.robots.find(r => r.id === entityId) ||
                     (state.topics||[]).find(t => t.id === entityId);
      if (entity) { entity.brainstorm = area.value; save(); }
      indicator.classList.add('show');
      setTimeout(() => indicator.classList.remove('show'), 1500);
    }, 600);
  });
}

// ── MODAL HELPERS ──────────────────────────────────────
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  if (['modal-robot', 'modal-meeting', 'modal-visit'].includes(id) && typeof pendingItemAttach !== 'undefined') {
    pendingItemAttach = null;
  }
  // Reset editing state
  editingVisitId = null; editingRobotId = null; editingTaskId = null;
  editingIssueId = null; editingMeetingId = null;
  editingSubscriptionId = null;
  editingExpenseId = null;
  editingPurchaseId = null;
  editingLinkId = null;
  // Reset modal titles/buttons to "add" mode
  const resets = {
    'modal-robot':     ['#modal-robot h3',     t('modal.add_new_list'),
                        'save-robot',          t('btn.add_list')],
    'modal-task':      ['#modal-task h3',       t('modal.add_task'),    'save-task',     t('btn.add_task')],
    'modal-issue':     ['#modal-issue h3',      t('modal.add_issue'),   'save-issue',    t('btn.add_issue')],
    'modal-visit':     ['#modal-visit h3',      t('modal.add_visit'),   'save-visit',    t('btn.add_visit')],
    'modal-meeting':   ['#modal-meeting h3',    t('modal.add_meeting'), 'save-meeting',  t('btn.add_meeting')],
    'modal-subscription': ['#modal-subscription h3', t('fin.modal_add'), 'save-subscription', t('fin.add_subscription')],
    'modal-expense': ['#modal-expense h3', t('fin.modal_expense_add'), 'save-expense', t('fin.add_expense')],
    'modal-purchase': ['#modal-purchase h3', t('purchases.modal_add'), 'save-purchase', t('btn.save')],
    'modal-link':     ['#modal-link h3',     t('links.modal_add'),     'save-link',     t('btn.save')],
  };
  const r = resets[id];
  if (r) {
    document.querySelector(r[0]).textContent = r[1];
    document.getElementById(r[2]).textContent = r[3];
  }
}

document.querySelectorAll('[data-close]').forEach(btn => {
  btn.addEventListener('click', () => closeModal(btn.dataset.close));
});
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', e => {
    if (e.target === overlay) overlay.classList.remove('open');
  });
});

// Radio group logic
function initRadioGroup(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.radio-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      group.querySelectorAll('.radio-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}
function getRadioValue(groupId) {
  const group = document.getElementById(groupId);
  if (!group) return null;
  const active = group.querySelector('.radio-btn.active');
  return active ? active.dataset.value : null;
}
function resetRadio(groupId, defaultVal) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.radio-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.value === defaultVal);
  });
}

// ── ADD ROBOT ──────────────────────────────────────────
function openEntityModal(type) {
  addingEntityType = type;
  document.getElementById('robot-name').value = '';
  document.getElementById('robot-desc').value = '';
  const catEl = document.getElementById('robot-category');
  if (catEl) catEl.value = '';
  const isDaily = getMode() === 'daily';
  document.querySelector('#modal-robot h3').textContent     = isDaily ? t('modal.add_new_list')  : t('modal.add_new_project');
  document.getElementById('save-robot').textContent          = isDaily ? t('btn.add_list')       : t('btn.add_project');
  document.getElementById('robot-name-label').textContent    = isDaily ? t('label.list_name')    : t('label.project_name');
  refreshCategoryDatalist();
  // Default the Space dropdown to: pendingItemAttach.spaceId (if user clicked a Space's "+")
  // → currentSpaceId → first space
  if (typeof refreshSpaceSelect === 'function') {
    const targetSpace = (typeof pendingItemAttach !== 'undefined' && pendingItemAttach && pendingItemAttach.spaceId)
      || state.currentSpaceId
      || (state.spaces && state.spaces[0] && state.spaces[0].id);
    refreshSpaceSelect(targetSpace);
  }
  openModal('modal-robot');
  setTimeout(() => document.getElementById('robot-name').focus(), 50);
}

document.getElementById('add-robot-btn').addEventListener('click', () => openEntityModal('robot'));
const _addTopicBtn = document.getElementById('add-topic-btn');
if (_addTopicBtn) _addTopicBtn.addEventListener('click', () => openEntityModal('robot'));

document.getElementById('robot-name').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('save-robot').click();
});

document.getElementById('save-robot').addEventListener('click', () => {
  const name = document.getElementById('robot-name').value.trim();
  if (!name) { document.getElementById('robot-name').focus(); return; }
  const desc    = document.getElementById('robot-desc').value.trim();
  const catEl   = document.getElementById('robot-category');
  const category = catEl ? catEl.value.trim() : '';
  const spaceSelEl   = document.getElementById('robot-space');
  const targetSpaceId = spaceSelEl ? spaceSelEl.value : null;
  if (editingRobotId) {
    const robot = state.robots.find(r => r.id === editingRobotId);
    if (robot) { robot.name = name; robot.description = desc; robot.category = category; }
    // v4: move list item to selected Space if changed
    if (targetSpaceId && typeof moveRobotToSpace === 'function') {
      moveRobotToSpace(editingRobotId, targetSpaceId);
      state.currentSpaceId = targetSpaceId;
    }
  } else {
    const robot = { id: uid(), name, description: desc, category, mode: getMode(), tasks: [], issues: [], createdAt: Date.now() };
    state.robots.push(robot);
    state.currentRobotId = robot.id;
    // v4: attach list item to selected Space (skip auto-migration default)
    if (targetSpaceId && typeof findSpace === 'function') {
      const sp = findSpace(targetSpaceId);
      if (sp) {
        const newItem = { id: uid(), type: 'list', refId: robot.id };
        sp.items.push(newItem);
        state.currentSpaceId = targetSpaceId;
        state.currentItemId  = newItem.id;
        // Clear pendingItemAttach so save() hook doesn't double-add
        if (typeof pendingItemAttach !== 'undefined') pendingItemAttach = null;
      }
    }
  }
  save();
  renderRobotList();
  renderRobotDetail();
  if (typeof renderSidebar === 'function') renderSidebar();
  closeModal('modal-robot');
});

// ── ADD TASK ───────────────────────────────────────────
window.openTaskModal = function() {
  document.getElementById('task-title').value = '';
  resetRadio('task-priority-group', 'normal');
  resetRadio('task-status-group', 'active');
  initRadioGroup('task-priority-group');
  initRadioGroup('task-status-group');
  const dd = document.getElementById('task-due-date'); if (dd) dd.value = '';
  const ti = document.getElementById('task-tags-input'); if (ti) ti.value = '';
  renderTagPicker([]);
  openModal('modal-task');
  setTimeout(() => document.getElementById('task-title').focus(), 50);
};

document.getElementById('task-title').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('save-task').click();
});

document.getElementById('save-task').addEventListener('click', () => {
  const title = document.getElementById('task-title').value.trim();
  if (!title) { document.getElementById('task-title').focus(); return; }
  const priority = getRadioValue('task-priority-group') || 'normal';
  const status   = getRadioValue('task-status-group')   || 'active';
  const dueDate  = (document.getElementById('task-due-date')?.value || '').trim();
  const tagsRaw  = (document.getElementById('task-tags-input')?.value || '').trim();
  const tags     = tagsRaw ? Array.from(new Set(tagsRaw.split(',').map(s => s.trim().toLowerCase()).filter(Boolean))) : [];
  const robot = getCurrentContainer();
  if (!robot) return;
  if (editingTaskId) {
    const task = robot.tasks.find(t => t.id === editingTaskId);
    if (task) { task.title = title; task.priority = priority; task.status = status; task.dueDate = dueDate || null; task.tags = tags; }
  } else {
    robot.tasks.push({ id: uid(), title, priority, status, dueDate: dueDate || null, tags, notebook: [], expanded: false, createdAt: Date.now() });
  }
  save();
  renderCurrentDetail();
  if (activeSection === 'topics') renderTopicList(); else renderRobotList();
  closeModal('modal-task');
});

// Tag picker — quick-pick chips for common categories
const COMMON_TAGS = ['embedded', 'hardware', 'cabling', 'software', 'mechanical', 'electrical', 'firmware', 'test', 'docs'];
function renderTagPicker(active) {
  const host = document.getElementById('task-tag-picker');
  if (!host) return;
  const set = new Set((active || []).map(s => s.toLowerCase()));
  host.innerHTML = COMMON_TAGS.map(tag =>
    `<button type="button" class="tag-chip ${set.has(tag) ? 'active' : ''}" data-tag="${tag}">${tag}</button>`
  ).join('');
  host.querySelectorAll('.tag-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      const input = document.getElementById('task-tags-input');
      const cur = (input.value || '').split(',').map(s => s.trim().toLowerCase()).filter(Boolean);
      const tag = btn.dataset.tag;
      const next = cur.includes(tag) ? cur.filter(t => t !== tag) : [...cur, tag];
      input.value = next.join(', ');
      btn.classList.toggle('active');
    });
  });
}

// ── ADD ISSUE ──────────────────────────────────────────
window.openIssueModal = function() {
  document.getElementById('issue-title').value = '';
  resetRadio('issue-severity-group', 'low');
  resetRadio('issue-status-group', 'open');
  initRadioGroup('issue-severity-group');
  initRadioGroup('issue-status-group');
  openModal('modal-issue');
  setTimeout(() => document.getElementById('issue-title').focus(), 50);
};

document.getElementById('issue-title').addEventListener('keydown', e => {
  if (e.key === 'Enter') document.getElementById('save-issue').click();
});

document.getElementById('save-issue').addEventListener('click', () => {
  const title = document.getElementById('issue-title').value.trim();
  if (!title) { document.getElementById('issue-title').focus(); return; }
  const severity = getRadioValue('issue-severity-group') || 'low';
  const status   = getRadioValue('issue-status-group')   || 'open';
  const robot = getCurrentContainer();
  if (!robot) return;
  if (!robot.issues) robot.issues = [];
  if (editingIssueId) {
    const issue = robot.issues.find(i => i.id === editingIssueId);
    if (issue) { issue.title = title; issue.severity = severity; issue.status = status; }
  } else {
    robot.issues.push({ id: uid(), title, severity, status, notebook: [], expanded: false, createdAt: Date.now() });
  }
  save();
  if (activeSection === 'topics') topicTab = 'issues'; else robotTab = 'issues';
  renderCurrentDetail();
  closeModal('modal-issue');
});

// ── FIELD VISITS ───────────────────────────────────────
const MONTHS = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC'];

function renderVisits() {
  // Visits are global (mode-agnostic) — people travel for work and for life
  // intentionally NOT using visitsByMode here
  const list = document.getElementById('visits-list');
  const sorted = (state.fieldVisits || []).slice().sort((a, b) => a.date.localeCompare(b.date));

  if (!sorted.length) {
    list.innerHTML = `
      <div class="empty-visits">
        <div class="empty-icon">${ICO.plane}</div>
        <p>${t('empty.no_visits')}</p>
      </div>`;
    return;
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  list.innerHTML = sorted.map(visit => {
    const d = new Date(visit.date + 'T00:00:00');
    const diff = Math.round((d - today) / 86400000);

    let badge = '';
    if (diff < 0)       badge = `<span class="days-badge past">${t('days.past', { n: Math.abs(diff) })}</span>`;
    else if (diff === 0) badge = `<span class="days-badge today">${t('days.today')}</span>`;
    else if (diff <= 14) badge = `<span class="days-badge soon">${t('days.future', { n: diff })}</span>`;
    else                 badge = `<span class="days-badge future">${t('days.future', { n: diff })}</span>`;

    return `
      <div class="visit-card" id="visit-${visit.id}">
        <div class="visit-date-block">
          <div class="visit-day">${d.getDate()}</div>
          <div class="visit-month">${MONTHS[d.getMonth()]}</div>
          <div class="visit-year">${d.getFullYear()}</div>
        </div>
        <div class="visit-info">
          <div class="visit-location">${ICO.pin} <span>${escapeHtml(visit.location)}</span></div>
          <div class="visit-tags">
            ${visit.robot ? `<span class="visit-robot-tag">${ICO.bot} ${escapeHtml(visit.robot)}</span>` : ''}
            ${badge}
          </div>
          ${visit.notes ? `<div class="visit-notes-text">${escapeHtml(visit.notes)}</div>` : ''}
          ${renderAttachments('visit', visit.id, visit.attachments)}
        </div>
        <div class="visit-delete">
          <button class="btn-sm" onclick="editVisit('${visit.id}')">${t('btn.edit')}</button>
          <button class="btn-sm danger" onclick="deleteVisit('${visit.id}')">${t('btn.delete')}</button>
        </div>
      </div>
    `;
  }).join('');
}

window.deleteVisit = function(id) {
  if (!confirm(t('conf.delete_visit'))) return;
  state.fieldVisits = state.fieldVisits.filter(v => v.id !== id);
  save();
  renderVisits();
};

// Add Visit Modal
document.getElementById('add-visit-btn').addEventListener('click', () => {
  document.getElementById('visit-location').value = '';
  document.getElementById('visit-date').value = '';
  document.getElementById('visit-robot').value = '';
  document.getElementById('visit-notes').value = '';
  openModal('modal-visit');
  setTimeout(() => document.getElementById('visit-location').focus(), 50);
});

document.getElementById('save-visit').addEventListener('click', () => {
  const location = document.getElementById('visit-location').value.trim();
  const date     = document.getElementById('visit-date').value;
  if (!location || !date) {
    if (!location) document.getElementById('visit-location').focus();
    else document.getElementById('visit-date').focus();
    return;
  }
  const robot = document.getElementById('visit-robot').value.trim();
  const notes = document.getElementById('visit-notes').value.trim();
  if (editingVisitId) {
    const visit = state.fieldVisits.find(v => v.id === editingVisitId);
    if (visit) { visit.location = location; visit.date = date; visit.robot = robot; visit.notes = notes; }
  } else {
    state.fieldVisits.push({ id: uid(), location, date, robot, notes, mode: getMode(), createdAt: Date.now() });
  }
  save();
  renderVisits();
  closeModal('modal-visit');
});

// ── MEETINGS ───────────────────────────────────────────
const MTG_MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

function renderMeetingList() {
  const list = document.getElementById('meeting-list');
  if (!list) return;
  if (!state.meetings) state.meetings = [];
  const sorted = meetingsByMode().sort((a, b) => b.date.localeCompare(a.date));
  if (!sorted.length) {
    list.innerHTML = `<div style="padding:16px;text-align:center;color:var(--muted);font-size:13px;">${t('empty.no_meetings')}</div>`;
    return;
  }
  list.innerHTML = sorted.map(m => {
    const d = new Date(m.date + 'T00:00:00');
    const dateStr = `${d.getDate()} ${MTG_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
    const openActions = (m.actions || []).filter(a => !a.done).length;
    const isSelected = m.id === state.currentMeetingId;
    return `
      <div class="robot-item ${isSelected ? 'active' : ''}" data-meeting-id="${m.id}">
        <div class="robot-avatar mtg-avatar">${ICO.usersAvatar}</div>
        <div class="robot-item-info">
          <div class="robot-item-name">${escapeHtml(m.title)}</div>
          <div class="robot-item-count">${dateStr}${openActions ? ` · ${t('count.actions_short', {open: openActions})}` : ''}</div>
        </div>
      </div>`;
  }).join('');
  list.querySelectorAll('.robot-item').forEach(item => {
    item.addEventListener('click', () => {
      state.currentMeetingId = item.dataset.meetingId;
      renderMeetingList();
      renderMeetingDetail();
    });
  });
}

function renderMeetingDetail() {
  const content = document.getElementById('meeting-content');
  if (!content) return;
  const meeting = (state.meetings || []).find(m => m.id === state.currentMeetingId);
  if (!meeting) {
    content.innerHTML = `<div class="empty-state"><div class="empty-icon">${ICO.users}</div><p>${t('empty.select_meeting')}</p></div>`;
    return;
  }
  const d = new Date(meeting.date + 'T00:00:00');
  const dateStr = `${d.getDate()} ${MTG_MONTHS[d.getMonth()]} ${d.getFullYear()}`;
  const actions = meeting.actions || [];
  const doneCount = actions.filter(a => a.done).length;

  content.innerHTML = `
    <div class="robot-detail-header">
      <div style="flex:1">
        <div class="robot-detail-name">${escapeHtml(meeting.title)}</div>
        <div class="meeting-meta">
          <span>${ICO.calendar} ${dateStr}</span>
          ${meeting.location   ? `<span>${ICO.pin} ${escapeHtml(meeting.location)}</span>`              : ''}
          ${meeting.attendees  ? `<span>${ICO.group} ${escapeHtml(meeting.attendees)}</span>`             : ''}
          ${meeting.robot      ? `<span class="visit-robot-tag">${ICO.bot} ${escapeHtml(meeting.robot)}</span>` : ''}
        </div>
      </div>
      <div class="btn-group">
        <button class="btn-sm" onclick="editMeeting('${meeting.id}')">Edit</button>
        <button class="btn-sm danger" onclick="deleteMeeting('${meeting.id}')">Delete</button>
      </div>
    </div>

    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('meeting.notes_label')}</div>
        <div class="save-indicator" id="mtg-save-ind">Saved</div>
      </div>
      <textarea class="brainstorm-area" id="mtg-notes-area"
        placeholder="${t('ph.brainstorm_notes')}"
      >${escapeHtml(meeting.notes || '')}</textarea>
    </div>

    ${renderAttachments('meeting', meeting.id, meeting.attachments)}

    <div class="dsection">
      <div class="dsection-header">
        <div class="dsection-label">${t('task.actions_label')} <span class="count-pill">${doneCount}/${actions.length}</span></div>
      </div>
      <div id="mtg-actions-list">
        ${actions.map(a => `
          <div class="action-item ${a.done ? 'done' : ''}" id="action-${a.id}">
            <button class="action-check ${a.done ? 'checked' : ''}" onclick="toggleMeetingAction('${meeting.id}','${a.id}')" aria-label="${t('aria.completed')}">
              ${a.done ? ICO.checkSm : ''}
            </button>
            <span class="action-text">${escapeHtml(a.text)}</span>
            <button class="nb-delete-btn" onclick="deleteMeetingAction('${meeting.id}','${a.id}')" aria-label="${t('aria.delete')}">${ICO.close}</button>
          </div>`).join('')}
      </div>
      <div class="nb-input-row" style="margin-top:8px">
        <input type="text" class="nb-input" id="mtg-action-input"
          placeholder="${t('ph.action_item')}"
          onkeydown="if(event.key==='Enter'){event.preventDefault();addMeetingAction('${meeting.id}')}"
          style="padding:8px 12px;height:auto;font-size:14px" />
        <button class="nb-add-btn" onclick="addMeetingAction('${meeting.id}')">${t('btn.add_short')}</button>
      </div>
    </div>
  `;
  attachMeetingNotes(meeting.id);
}

let mtgNotesTimer;
function attachMeetingNotes(meetingId) {
  const area = document.getElementById('mtg-notes-area');
  const ind  = document.getElementById('mtg-save-ind');
  if (!area) return;
  area.addEventListener('input', () => {
    clearTimeout(mtgNotesTimer);
    mtgNotesTimer = setTimeout(() => {
      const m = (state.meetings || []).find(m => m.id === meetingId);
      if (m) { m.notes = area.value; save(); }
      ind.classList.add('show');
      setTimeout(() => ind.classList.remove('show'), 1500);
    }, 600);
  });
}

window.addMeetingAction = function(meetingId) {
  const m = (state.meetings || []).find(m => m.id === meetingId);
  const input = document.getElementById('mtg-action-input');
  const text = input ? input.value.trim() : '';
  if (!text || !m) { if (input) input.focus(); return; }
  if (!m.actions) m.actions = [];
  m.actions.push({ id: uid(), text, done: false, createdAt: Date.now() });
  save();
  renderMeetingDetail();
};

window.toggleMeetingAction = function(meetingId, actionId) {
  const m = (state.meetings || []).find(m => m.id === meetingId);
  const a = m && (m.actions || []).find(a => a.id === actionId);
  if (!a) return;
  a.done = !a.done;
  save();
  renderMeetingDetail();
};

window.deleteMeetingAction = function(meetingId, actionId) {
  const m = (state.meetings || []).find(m => m.id === meetingId);
  if (!m) return;
  m.actions = (m.actions || []).filter(a => a.id !== actionId);
  save();
  renderMeetingDetail();
};

window.deleteMeeting = function(id) {
  if (!confirm(t('conf.delete_meeting'))) return;
  state.meetings = (state.meetings || []).filter(m => m.id !== id);
  if (state.currentMeetingId === id) state.currentMeetingId = null;
  save();
  renderMeetingList();
  renderMeetingDetail();
};

window.editMeeting = function(id) {
  const m = (state.meetings || []).find(m => m.id === id);
  if (!m) return;
  editingMeetingId = id;
  document.getElementById('meeting-title').value     = m.title;
  document.getElementById('meeting-date').value      = m.date;
  document.getElementById('meeting-location').value  = m.location || '';
  document.getElementById('meeting-attendees').value = m.attendees || '';
  document.getElementById('meeting-robot').value     = m.robot || '';
  document.querySelector('#modal-meeting h3').textContent  = t('modal.edit_meeting');
  document.getElementById('save-meeting').textContent      = t('btn.save_changes');
  openModal('modal-meeting');
  setTimeout(() => document.getElementById('meeting-title').focus(), 50);
};

// Add Meeting button
document.getElementById('add-meeting-btn').addEventListener('click', () => {
  document.getElementById('meeting-title').value     = '';
  document.getElementById('meeting-date').value      = new Date().toISOString().slice(0, 10);
  document.getElementById('meeting-location').value  = '';
  document.getElementById('meeting-attendees').value = '';
  document.getElementById('meeting-robot').value     = '';
  editingMeetingId = null;
  openModal('modal-meeting');
  setTimeout(() => document.getElementById('meeting-title').focus(), 50);
});

document.getElementById('save-meeting').addEventListener('click', () => {
  const title = document.getElementById('meeting-title').value.trim();
  const date  = document.getElementById('meeting-date').value;
  if (!title) { document.getElementById('meeting-title').focus(); return; }
  if (!date)  { document.getElementById('meeting-date').focus();  return; }
  const location  = document.getElementById('meeting-location').value.trim();
  const attendees = document.getElementById('meeting-attendees').value.trim();
  const robot     = document.getElementById('meeting-robot').value.trim();
  if (!state.meetings) state.meetings = [];
  if (editingMeetingId) {
    const m = state.meetings.find(m => m.id === editingMeetingId);
    if (m) { m.title = title; m.date = date; m.location = location; m.attendees = attendees; m.robot = robot; }
  } else {
    const m = { id: uid(), title, date, location, attendees, robot, notes: '', actions: [], mode: getMode(), createdAt: Date.now() };
    state.meetings.push(m);
    state.currentMeetingId = m.id;
  }
  save();
  renderMeetingList();
  renderMeetingDetail();
  closeModal('modal-meeting');
});

// ── ATTACHMENTS ────────────────────────────────────────
const ATT_PAPERCLIP = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>';
const ATT_FILE      = '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>';
const MAX_ATTACHMENT_BYTES = 25 * 1024 * 1024;

function formatSize(bytes) {
  if (!bytes && bytes !== 0) return '';
  if (bytes < 1024) return bytes + ' B';
  if (bytes < 1024 * 1024) return Math.round(bytes / 1024) + ' KB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function findEntity(type, id) {
  if (type === 'task') {
    const c = getCurrentContainer();
    return c && (c.tasks || []).find(x => x.id === id);
  }
  if (type === 'issue') {
    const c = getCurrentContainer();
    return c && (c.issues || []).find(x => x.id === id);
  }
  if (type === 'meeting') return (state.meetings || []).find(x => x.id === id);
  if (type === 'visit')   return (state.fieldVisits || []).find(x => x.id === id);
  return null;
}

function renderAttachments(type, id, attachments) {
  const list = (attachments || []);
  const items = list.map(a => `
    <div class="att-chip" data-filename="${escapeAttr(a.filename)}">
      <span class="att-ico">${ATT_FILE}</span>
      <span class="att-name" onclick="openAttachment('${escapeJsArg(type)}','${escapeJsArg(id)}','${escapeJsArg(a.filename)}')" title="${escapeAttr(a.originalName)}">${escapeHtml(a.originalName)}</span>
      <span class="att-size">${formatSize(a.size)}</span>
      <button class="att-del" onclick="deleteAttachment('${escapeJsArg(type)}','${escapeJsArg(id)}','${escapeJsArg(a.filename)}')" title="${escapeAttr(t('btn.delete'))}">${ICO.close}</button>
    </div>
  `).join('');
  return `
    <div class="att-section">
      <div class="att-section-head">
        <span class="att-label">${ATT_PAPERCLIP} <span>${t('att.section')}${list.length ? ` <span class="count-pill">${list.length}</span>` : ''}</span></span>
        <button class="att-add-btn" onclick="attachFiles('${escapeJsArg(type)}','${escapeJsArg(id)}')">${t('att.add')}</button>
      </div>
      ${items ? `<div class="att-list">${items}</div>` : ''}
    </div>
  `;
}

// Trigger file picker for an entity (PWA — Drive must be connected)
window.attachFiles = function(type, id) {
  if (!DriveAPI || !DriveAPI.isSignedIn()) {
    alert(t('att.signin_required'));
    return;
  }
  let input = document.getElementById('att-file-input');
  if (!input) {
    input = document.createElement('input');
    input.type = 'file';
    input.id = 'att-file-input';
    input.multiple = true;
    input.style.display = 'none';
    document.body.appendChild(input);
    input.addEventListener('change', handleAttachUpload);
  }
  input.dataset.entityType = type;
  input.dataset.entityId   = id;
  input.click();
};

async function handleAttachUpload(e) {
  const input = e.target;
  const type  = input.dataset.entityType;
  const id    = input.dataset.entityId;
  const files = Array.from(input.files || []);
  input.value = '';
  if (!files.length) return;

  for (const file of files) {
    if (file.size > MAX_ATTACHMENT_BYTES) {
      alert(t('att.too_big', { name: file.name }));
      continue;
    }
    try {
      const result = await DriveAPI.saveAttachment(id, file.name, file);
      const entity = findEntity(type, id);
      if (entity) {
        if (!entity.attachments) entity.attachments = [];
        entity.attachments.push({
          filename:     result.filename,
          originalName: file.name,
          size:         result.size,
          addedAt:      Date.now(),
        });
      }
    } catch (err) {
      alert(t('att.failed', { msg: err.message || err }));
    }
  }
  save();
  // Re-render whichever detail view is active
  if (typeof renderCurrentDetail === 'function') renderCurrentDetail();
  if (type === 'meeting' && typeof renderMeetingDetail === 'function') renderMeetingDetail();
  if (type === 'visit'   && typeof renderVisits === 'function') renderVisits();
}

function readFileAsBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

window.openAttachment = async function(type, id, filename) {
  if (!DriveAPI.isSignedIn()) return;
  try { await DriveAPI.openAttachment(id, filename); } catch (e) { console.warn(e); }
};

window.deleteAttachment = async function(type, id, filename) {
  if (!confirm(t('att.confirm_delete'))) return;
  if (DriveAPI.isSignedIn()) {
    try { await DriveAPI.deleteAttachment(id, filename); } catch {}
  }
  const entity = findEntity(type, id);
  if (entity && entity.attachments) {
    entity.attachments = entity.attachments.filter(a => a.filename !== filename);
    save();
    if (typeof renderCurrentDetail === 'function') renderCurrentDetail();
    if (type === 'meeting' && typeof renderMeetingDetail === 'function') renderMeetingDetail();
    if (type === 'visit'   && typeof renderVisits === 'function') renderVisits();
  }
};

// ── DRIVE API (PWA / browser path) ─────────────────────
// Uses Google Identity Services + Drive REST API.
// Same folder structure as Electron path: Drive/B-Less/{b-less-backup.json, attachments/<id>/<file>}
const DriveAPI = (() => {
  const CLIENT_ID = '733970458049-nh53ksvtjaavj0p5up5bs89jd78t9rf9.apps.googleusercontent.com';
  // drive.file = only files this app creates/opens. User's other Drive content is hidden from us.
  // email + profile = needed to display the connected account
  const SCOPE = 'https://www.googleapis.com/auth/drive.file https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile';

  let tokenClient = null;
  let accessToken = null;
  let tokenExpiry = 0;
  let folderId    = null;
  let userInfo    = null; // { email, name }

  function isLibraryReady() {
    return typeof window.google !== 'undefined' && window.google.accounts && window.google.accounts.oauth2;
  }

  async function waitForLibrary(timeoutMs = 8000) {
    if (isLibraryReady()) return true;
    const t0 = Date.now();
    return new Promise(resolve => {
      const iv = setInterval(() => {
        if (isLibraryReady()) { clearInterval(iv); resolve(true); }
        else if (Date.now() - t0 > timeoutMs) { clearInterval(iv); resolve(false); }
      }, 80);
    });
  }

  function makeTokenClient(callback) {
    return google.accounts.oauth2.initTokenClient({
      client_id: CLIENT_ID,
      scope: SCOPE,
      callback,
    });
  }

  function isExpired() { return !accessToken || Date.now() >= tokenExpiry - 30_000; }

  // Try silent re-auth (no popup) — works if the user already granted permission
  async function trySilentSignIn() {
    if (!await waitForLibrary()) return false;
    return new Promise(resolve => {
      const tc = makeTokenClient(async resp => {
        if (resp.error) { resolve(false); return; }
        accessToken = resp.access_token;
        tokenExpiry = Date.now() + (resp.expires_in || 3600) * 1000;
        try { await fetchUserInfo(); } catch {}
        resolve(true);
      });
      // Passing the cached email as login_hint helps GSI pick the right
      // session and noticeably improves silent re-auth success in standalone
      // PWAs where the iframe doesn't always share session state cleanly.
      const opts = { prompt: 'none' };
      if (userInfo && userInfo.email) opts.hint = userInfo.email;
      try { tc.requestAccessToken(opts); } catch { resolve(false); }
    });
  }

  // Interactive sign-in (user clicks button)
  async function signIn() {
    if (!await waitForLibrary()) throw new Error('Google library failed to load');
    return new Promise((resolve, reject) => {
      tokenClient = makeTokenClient(async resp => {
        if (resp.error) { reject(resp); return; }
        accessToken = resp.access_token;
        tokenExpiry = Date.now() + (resp.expires_in || 3600) * 1000;
        try { await fetchUserInfo(); } catch {}
        resolve();
      });
      tokenClient.requestAccessToken({ prompt: 'consent' });
    });
  }

  function signOut() {
    if (accessToken) try { google.accounts.oauth2.revoke(accessToken, () => {}); } catch {}
    accessToken = null; tokenExpiry = 0; folderId = null; userInfo = null;
    try { localStorage.removeItem('b-less-drive-user'); } catch {}
  }

  async function fetchUserInfo() {
    const r = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
      headers: { Authorization: 'Bearer ' + accessToken },
    });
    if (!r.ok) return;
    const data = await r.json();
    userInfo = { email: data.email, name: data.name, picture: data.picture };
    try { localStorage.setItem('b-less-drive-user', JSON.stringify(userInfo)); } catch {}
    if (typeof window.celebrateIfBeloved === 'function') {
      try { window.celebrateIfBeloved(userInfo.email); } catch {}
    }
    if (typeof applyOwnerGate === 'function') {
      try { applyOwnerGate(userInfo.email); } catch {}
    }
  }

  async function ensureToken() {
    if (!isExpired()) return accessToken;
    const ok = await trySilentSignIn();
    if (!ok) throw new Error('Token expired and silent reauth failed');
    return accessToken;
  }

  async function api(method, url, opts = {}) {
    await ensureToken();
    const init = {
      method,
      headers: { Authorization: 'Bearer ' + accessToken, ...(opts.headers || {}) },
    };
    if (opts.body) init.body = opts.body;
    const r = await fetch(url, init);
    if (r.status === 401) {
      // Force re-auth
      accessToken = null; tokenExpiry = 0;
      throw new Error('Unauthorized — please sign in again');
    }
    if (!r.ok) {
      const text = await r.text().catch(() => '');
      throw new Error(`Drive API ${method} ${r.status}: ${text.slice(0, 200)}`);
    }
    return r;
  }

  // Find or create the "B-Less" folder at user's Drive root.
  // (Older installs created a "Karta" folder — rename it manually if you're
  // migrating, or let the app create a fresh "B-Less" folder and move the
  // backup file/attachments into it.)
  async function ensureFolder(name = 'B-Less', parent = null) {
    const cacheKey = `${parent || 'root'}/${name}`;
    if (parent === null && folderId) return folderId;
    const safeName = name.replace(/'/g, "\\'");
    const parentClause = parent ? `'${parent}' in parents` : `'root' in parents`;
    const q = `name='${safeName}' and mimeType='application/vnd.google-apps.folder' and ${parentClause} and trashed=false`;
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name)&pageSize=1`);
    const data = await r.json();
    if (data.files && data.files.length > 0) {
      const id = data.files[0].id;
      if (parent === null) folderId = id;
      return id;
    }
    const meta = { name, mimeType: 'application/vnd.google-apps.folder' };
    if (parent) meta.parents = [parent];
    const cr = await api('POST', 'https://www.googleapis.com/drive/v3/files', {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(meta),
    });
    const folder = await cr.json();
    if (parent === null) folderId = folder.id;
    return folder.id;
  }

  async function findFile(name, parentId) {
    const safe = name.replace(/'/g, "\\'");
    const q = `name='${safe}' and '${parentId}' in parents and trashed=false`;
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(q)}&fields=files(id,name,modifiedTime,size)&pageSize=1`);
    const data = await r.json();
    return (data.files && data.files[0]) || null;
  }

  // Multipart upload (creates new or updates existing)
  async function uploadBlob(name, blob, parentId, existingId, mimeType) {
    const meta = existingId
      ? { name }
      : { name, parents: [parentId] };
    const boundary = '-------b-less-' + Math.random().toString(36).slice(2);
    const head = `--${boundary}\r\nContent-Type: application/json; charset=UTF-8\r\n\r\n${JSON.stringify(meta)}\r\n--${boundary}\r\nContent-Type: ${mimeType || blob.type || 'application/octet-stream'}\r\n\r\n`;
    const tail = `\r\n--${boundary}--\r\n`;
    const body = new Blob([head, blob, tail], { type: `multipart/related; boundary=${boundary}` });
    const url = existingId
      ? `https://www.googleapis.com/upload/drive/v3/files/${existingId}?uploadType=multipart&fields=id,name,size,modifiedTime`
      : `https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart&fields=id,name,size,modifiedTime`;
    const r = await api(existingId ? 'PATCH' : 'POST', url, {
      headers: { 'Content-Type': `multipart/related; boundary=${boundary}` },
      body,
    });
    return r.json();
  }

  async function downloadText(fileId) {
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
    return r.text();
  }

  async function downloadBlob(fileId) {
    const r = await api('GET', `https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`);
    return r.blob();
  }

  async function deleteFile(fileId) {
    await api('DELETE', `https://www.googleapis.com/drive/v3/files/${fileId}`);
  }

  // ── Backup ──
  async function saveBackup(jsonStr, filename = 'b-less-backup.json') {
    const fid = await ensureFolder();
    const existing = await findFile(filename, fid);
    const blob = new Blob([jsonStr], { type: 'application/json' });
    return uploadBlob(filename, blob, fid, existing && existing.id, 'application/json');
  }

  async function readBackup(filename = 'b-less-backup.json') {
    const fid = await ensureFolder();
    const f = await findFile(filename, fid);
    if (!f) return null;
    return downloadText(f.id);
  }

  // ── Attachments ──
  async function saveAttachment(entityId, originalName, blob) {
    const root = await ensureFolder();
    const attRoot = await ensureFolder('attachments', root);
    const entityFolder = await ensureFolder(entityId, attRoot);
    // Avoid name collision
    let name = originalName;
    let n = 1;
    while (await findFile(name, entityFolder)) {
      const ext = name.includes('.') ? name.slice(name.lastIndexOf('.')) : '';
      const base = ext ? name.slice(0, -ext.length) : name;
      name = `${base} (${n})${ext}`;
      n++;
    }
    const meta = await uploadBlob(name, blob, entityFolder, null, blob.type);
    return { filename: meta.name, size: parseInt(meta.size || blob.size, 10) };
  }

  async function openAttachment(entityId, filename) {
    const root = await ensureFolder();
    const attRoot = await ensureFolder('attachments', root);
    const entityFolder = await ensureFolder(entityId, attRoot);
    const f = await findFile(filename, entityFolder);
    if (!f) return false;
    // Open in Drive's viewer in a new tab
    window.open(`https://drive.google.com/file/d/${f.id}/view`, '_blank');
    return true;
  }

  async function deleteAttachment(entityId, filename) {
    const root = await ensureFolder();
    const attRoot = await ensureFolder('attachments', root);
    const entityFolder = await ensureFolder(entityId, attRoot);
    const f = await findFile(filename, entityFolder);
    if (!f) return false;
    await deleteFile(f.id);
    return true;
  }

  // Restore last user info on init (for header chip without re-auth)
  try {
    const cached = localStorage.getItem('b-less-drive-user');
    if (cached) userInfo = JSON.parse(cached);
  } catch {}

  return {
    isLibraryReady, waitForLibrary,
    signIn, signOut, trySilentSignIn,
    isSignedIn:  () => !isExpired(),
    getUserInfo: () => userInfo,
    saveBackup, readBackup,
    saveAttachment, openAttachment, deleteAttachment,
  };
})();

// ── BACKUP MANAGER (PWA, Drive API only) ───────────────
const BackupManager = (() => {
  const INTERVAL   = 5 * 60 * 1000;
  const SYNC_KEY   = 'b-less-last-backup-at';
  let intervalId   = null;
  let debounceId   = null;
  // lastBackup is the wall-clock time of the most-recent push we know about
  // (or pull, after we accept Drive's timestamp). Persist it to localStorage
  // so we can compare against the Drive backup on next launch and avoid
  // re-uploading a stale local copy that would clobber another device.
  let lastBackup   = (() => {
    try { const v = localStorage.getItem(SYNC_KEY); return v ? parseInt(v, 10) || null : null; } catch { return null; }
  })();
  function setLastBackup(ts) {
    lastBackup = ts;
    try { localStorage.setItem(SYNC_KEY, String(ts)); } catch {}
  }
  let filename     = (() => {
    try { return localStorage.getItem('b-less-backup-filename') || 'b-less-backup.json'; }
    catch { return 'b-less-backup.json'; }
  })();

  const GDRIVE_ICON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7.71 3.5 1.15 15l3.5 6.5L11.21 10z"/><path d="m22.85 15-6.56-11.5h-7l6.57 11.5z"/><path d="M4.65 21.5h13.13l3.5-6.5H8.15z"/></svg>';
  const ARROW = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg>';

  function lastSyncText() {
    if (!lastBackup) return t('bp.never');
    const diff = Math.round((Date.now() - lastBackup) / 60000);
    return diff < 1 ? t('bp.just_now') : t('bp.min_ago', { n: diff });
  }

  function render() {
    const pop         = document.getElementById('bp-content');
    const headerBtn   = document.getElementById('backup-btn');
    const headerLabel = document.getElementById('backup-label');
    if (!pop) return;

    if (DriveAPI.isSignedIn()) {
      const u = DriveAPI.getUserInfo() || {};
      const lastTxt = lastSyncText();
      const initial = (u.name || u.email || '?').trim().charAt(0).toUpperCase();
      const avatar = u.picture
        ? `<img class="bp-avatar-img" src="${escapeAttr(u.picture)}" alt="" referrerpolicy="no-referrer">`
        : `<span class="bp-avatar-fallback">${initial}</span>`;
      pop.innerHTML = `
        <div class="bp-title">${t('bp.title')}</div>

        <div class="bp-account">
          <div class="bp-avatar">${avatar}</div>
          <div class="bp-account-info">
            <div class="bp-account-name">Google Drive</div>
            <div class="bp-account-email" title="${escapeAttr(u.email || '')}">${u.email || ''}</div>
          </div>
          <button class="bp-icon-btn bp-signout-btn" data-act="signout" title="${escapeAttr(t('bp.sign_out'))}" aria-label="${escapeAttr(t('bp.sign_out'))}">
            <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/></svg>
          </button>
        </div>

        <div class="bp-meta">
          <div class="bp-meta-row">
            <span class="bp-meta-label">${t('bp.filename')}</span>
            <span class="bp-meta-value" title="${escapeAttr(filename)}">${filename}</span>
            <button class="bp-icon-btn" data-act="rename" title="${escapeAttr(t('bp.rename'))}" aria-label="${escapeAttr(t('bp.rename'))}">
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4z"/></svg>
            </button>
          </div>
          <div class="bp-meta-row">
            <span class="bp-meta-label">${t('bp.last_sync')}</span>
            <span class="bp-meta-value bp-last-sync">${lastTxt}</span>
          </div>
        </div>

        <div class="bp-actions">
          <button class="btn-ghost" data-act="backup-now">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            <span>${t('bp.backup_now')}</span>
          </button>
          <button class="btn-ghost" data-act="restore">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M19 12l-7 7-7-7"/></svg>
            <span>${t('bp.restore')}</span>
          </button>
        </div>
      `;
      if (headerBtn && headerLabel) {
        headerBtn.classList.remove('backup-warn');
        headerBtn.classList.add('backup-ok');
        headerLabel.textContent = lastTxt;
      }
    } else {
      pop.innerHTML = `
        <div class="bp-intro">
          <div class="bp-intro-icon">${GDRIVE_ICON}</div>
          <div class="bp-intro-title">${t('bp.title')}</div>
          <div class="bp-intro-sub">${t('bp.web_subtitle')}</div>
        </div>
        <ul class="bp-intro-list">
          <li>Private "B-Less" folder in your Drive</li>
          <li>Auto-syncs as you make changes</li>
          <li>Restore everything on a new device</li>
        </ul>
        <button class="bp-cta-btn" data-act="signin">
          <span class="bp-cta-ico">${GDRIVE_ICON}</span>
          <span>${t('bp.sign_in')}</span>
        </button>
        <div class="bp-hint">${t('bp.web_hint')}</div>
      `;
      if (headerBtn && headerLabel) {
        headerBtn.classList.remove('backup-ok', 'backup-warn');
        headerLabel.textContent = '';
      }
    }

    pop.querySelectorAll('[data-act]').forEach(el => {
      el.addEventListener('click', async e => {
        e.stopPropagation();
        const act = el.dataset.act;
        if (act === 'signin') {
          try {
            await DriveAPI.signIn();
            const restored = await tryRestore();
            if (!restored) await doBackup();
            scheduleInterval();
            render();
            openPopover(); // tryRestore may have closed/reset things; ensure the connected panel is visible
          } catch (e) {
            alert(t('bp.sign_in_failed', { msg: (e && (e.error || e.message)) || 'unknown' }));
          }
        } else if (act === 'signout') {
          DriveAPI.signOut();
          lastBackup = null;
          try { localStorage.removeItem(SYNC_KEY); } catch {}
          clearInterval(intervalId);
          render();
        } else if (act === 'backup-now') {
          await doBackup();
          render();
        } else if (act === 'restore') {
          const ok = await tryRestore();
          if (!ok) alert(t('bp.no_backup_found'));
        } else if (act === 'rename') {
          const next = prompt(t('bp.rename_prompt'), filename);
          if (!next || !next.trim() || next.trim() === filename) return;
          let cleaned = next.trim().replace(/[\\/:*?"<>|]/g, '');
          if (!/\.json$/i.test(cleaned)) cleaned += '.json';
          filename = cleaned;
          try { localStorage.setItem('b-less-backup-filename', cleaned); } catch {}
          await doBackup();
          render();
        }
      });
    });
  }

  async function doBackup() {
    if (!DriveAPI.isSignedIn()) return;
    const json = JSON.stringify({ exportedAt: new Date().toISOString(), data: state }, null, 2);
    try {
      await DriveAPI.saveBackup(json, filename);
      setLastBackup(Date.now());
      render();
    } catch (e) { console.warn('Backup failed:', e); }
  }

  // Quietly fetch the Drive backup and apply it if it's newer than the most
  // recent push we performed from this device. No prompt — this is the
  // multi-device sync path. Returns true when a restore happened.
  async function pullIfNewer() {
    const backup = await readBackupFromDrive();
    if (!backup || !backup.data) return false;
    const driveTime = new Date(backup.exportedAt).getTime();
    if (!Number.isFinite(driveTime)) return false;
    // Grace window so our own just-pushed backup (timestamp jitter) doesn't
    // immediately bounce back through this path on the same device.
    const GRACE = 5000;
    if (lastBackup && driveTime <= lastBackup + GRACE) return false;
    Object.assign(state, backup.data);
    setLastBackup(driveTime);
    save();
    if (typeof renderAll === 'function') renderAll();
    return true;
  }

  async function readBackupFromDrive() {
    if (!DriveAPI.isSignedIn()) return null;
    try {
      const text = await DriveAPI.readBackup(filename);
      return text ? JSON.parse(text) : null;
    } catch { return null; }
  }

  async function tryRestore() {
    const backup = await readBackupFromDrive();
    if (!backup || !backup.data) return false;
    const hasData = (state.robots || []).length > 0 ||
                    (state.fieldVisits || []).length > 0 ||
                    (state.meetings || []).length > 0;
    const backupDate   = new Date(backup.exportedAt).toLocaleString();
    const projectCount = (backup.data.robots || []).length;
    const msg = hasData
      ? t('bp.restore_overwrite', { date: backupDate, n: projectCount })
      : t('bp.restore_load',      { date: backupDate, n: projectCount });
    if (!hasData || confirm(msg)) {
      Object.assign(state, backup.data);
      const driveTime = new Date(backup.exportedAt).getTime();
      if (Number.isFinite(driveTime)) setLastBackup(driveTime);
      save();
      renderAll();
      return true;
    }
    return false;
  }

  function scheduleInterval() {
    clearInterval(intervalId);
    intervalId = setInterval(async () => {
      // Pull first so we don't push an outdated local copy that would
      // overwrite changes another device made while we were idle.
      await pullIfNewer().catch(() => {});
      doBackup();
    }, INTERVAL);
  }

  function onDataChange() {
    clearTimeout(debounceId);
    debounceId = setTimeout(doBackup, 2000);
  }

  async function init() {
    // Skip silent sign-in for first-time users. We only know they've granted
    // consent if they previously signed in (then we cached b-less-drive-user).
    // Without this guard the Google Identity Services library still loads its
    // accounts.google.com iframe on every fresh launch, which flashes briefly
    // and looks broken — even though prompt:'none' would have failed anyway.
    let hasPriorAuth = false;
    try { hasPriorAuth = !!localStorage.getItem('b-less-drive-user'); } catch {}
    if (!hasPriorAuth) {
      render();
      return;
    }
    const ok = await DriveAPI.trySilentSignIn().catch(() => false);
    if (ok) {
      // Always check Drive for a newer backup before we start pushing — this
      // is what makes web ↔ mobile two-way sync actually work. Without this,
      // the device that opens last would silently overwrite the other's
      // changes with its stale local snapshot.
      await pullIfNewer().catch(() => {});
      // First-time user with no local data and no Drive watermark? Fall back
      // to the existing prompt-based restore so they don't lose anything by
      // accident.
      const hasData = (state.robots || []).length > 0 ||
                      (state.fieldVisits || []).length > 0 ||
                      (state.meetings || []).length > 0;
      if (!hasData && !lastBackup) await tryRestore();
      scheduleInterval();
      doBackup();
    }
    render();
  }

  // Triggered by a real user click — keeps OAuth popup permission alive.
  // IMPORTANT: must be invoked synchronously from a user gesture handler (no
  // synthetic .click() forwarding), otherwise mobile browsers block the popup.
  function openPopover() {
    const popover = document.getElementById('backup-popover');
    const backdrop = document.getElementById('backup-backdrop');
    if (popover) popover.classList.add('open');
    if (backdrop) backdrop.classList.add('open');
  }

  async function handleHeaderClick(e) {
    if (e && e.stopPropagation) e.stopPropagation();
    // Always toggle the popover. The popover's content renders the right
    // affordance (intro + Sign in button when not connected, account panel
    // when connected). Going straight to OAuth on first tap was disorienting
    // because no in-app context was shown before the Google popup appeared.
    const popover = document.getElementById('backup-popover');
    const backdrop = document.getElementById('backup-backdrop');
    if (popover) {
      const isOpen = popover.classList.contains('open');
      popover.classList.toggle('open', !isOpen);
      if (backdrop) backdrop.classList.toggle('open', !isOpen);
    }
  }

  function initUI() {
    const btn      = document.getElementById('backup-btn');
    const moreBtn  = document.getElementById('more-drive-trigger');
    const popover  = document.getElementById('backup-popover');
    const backdrop = document.getElementById('backup-backdrop');
    if (!popover || (!btn && !moreBtn)) return;

    const entryControls = [btn, moreBtn].filter(Boolean);
    function closePopover() { popover.classList.remove('open'); if (backdrop) backdrop.classList.remove('open'); }

    // Attach the SAME real handler to both entry points — no synthetic click forwarding,
    // because that loses user-gesture context and mobile browsers block the popup.
    entryControls.forEach(el => el.addEventListener('click', handleHeaderClick));

    // Backdrop click closes
    if (backdrop) backdrop.addEventListener('click', closePopover);

    // Outside click closes
    document.addEventListener('click', e => {
      if (!popover.classList.contains('open')) return;
      if (!popover.contains(e.target) && !entryControls.some(el => e.target === el || el.contains(e.target)))
        closePopover();
    });

    // ESC closes
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && popover.classList.contains('open')) closePopover();
    });

    // Best-effort flush before unload
    window.addEventListener('beforeunload', () => { if (DriveAPI.isSignedIn()) doBackup(); });
    setInterval(render, 30000); // refresh "X min ago"
  }

  return { init, onDataChange, initUI, tryRestore, refresh: render, handleHeaderClick };
})();
// ── RENDER ALL ─────────────────────────────────────────
function renderAll() {
  if (!state.topics)     state.topics = [];
  if (!state.workHours)  state.workHours = [];
  if (!state.meetings)   state.meetings = [];
  ensureFinanceState();
  if (state.currentTopicId   === undefined) state.currentTopicId   = null;
  if (state.currentMeetingId === undefined) state.currentMeetingId = null;
  renderRobotList();
  renderRobotDetail();
  renderTopicList();
  renderTopicDetail();
  renderVisits();
  renderWorkHours();
  renderMeetingList();
  renderMeetingDetail();
  renderFinance();
  if (typeof renderPurchases === 'function') renderPurchases();
  if (typeof renderReviews === 'function') renderReviews();
  if (typeof renderLinks === 'function') renderLinks();
}

function renderWorkHours() {} // removed

// ── ALL TASKS VIEW ─────────────────────────────────────
let allTasksFilter = 'open'; // 'open' | 'today' | 'all'

function renderAllTasks() {
  renderStreakWidget();
  const list = document.getElementById('all-tasks-list');
  if (!list) return;

  // Collect tasks across projects (current mode)
  const items = [];
  projectsByMode().forEach(p => {
    (p.tasks || []).forEach(t => items.push({ task: t, project: p }));
  });

  // Apply filter
  let filtered = items;
  if (allTasksFilter === 'open') {
    filtered = items.filter(it => it.task.status !== 'done');
  } else if (allTasksFilter === 'today') {
    const today = new Date(); today.setHours(0,0,0,0);
    filtered = items.filter(it => {
      if (it.task.status === 'done') return false;
      if (!it.task.dueDate) return false;
      const due = new Date(it.task.dueDate + 'T00:00:00');
      // Today filter: due today OR overdue (still open)
      return due <= today;
    });
  }

  // Group: active → pending → done
  const order = { active: 0, pending: 1, done: 2 };
  filtered.sort((a, b) => {
    const sa = order[a.task.status] ?? 9;
    const sb = order[b.task.status] ?? 9;
    if (sa !== sb) return sa - sb;
    const pri = { critical: 0, high: 1, normal: 2 };
    return (pri[a.task.priority] ?? 2) - (pri[b.task.priority] ?? 2);
  });

  if (!filtered.length) {
    const msg = allTasksFilter === 'open'
      ? t('empty.no_tasks_open')
      : allTasksFilter === 'today'
        ? t('empty.no_tasks_today')
        : t('empty.no_tasks_yet');
    list.innerHTML = `<div class="empty-visits"><p>${escapeHtml(msg)}</p></div>`;
    return;
  }

  // Group by project
  const byProject = {};
  filtered.forEach(it => {
    const k = it.project.id;
    if (!byProject[k]) byProject[k] = { project: it.project, items: [] };
    byProject[k].items.push(it);
  });

  list.innerHTML = Object.values(byProject).map(g => `
    <div class="at-group">
      <div class="at-group-label">
        <span>${escapeHtml(g.project.name)}</span>
        <span class="count-pill">${g.items.length}</span>
      </div>
      ${g.items.map(it => `
        <div class="at-task ${it.task.status}" data-project-id="${escapeAttr(it.project.id)}" data-task-id="${escapeAttr(it.task.id)}">
          <span class="at-task-dot ${it.task.status}"></span>
          <span class="at-task-title">${escapeHtml(it.task.title)}</span>
          ${(it.task.tags || []).map(tg => `<span class="task-label-chip">${escapeHtml(tg)}</span>`).join('')}
          ${it.task.dueDate ? `<span class="task-due ${dueClass(it.task.dueDate, it.task.status)}">${formatDueShort(it.task.dueDate)}</span>` : ''}
          ${it.task.priority && it.task.priority !== 'normal' ? `<span class="at-task-prio ${escapeAttr(it.task.priority)}">${escapeHtml(it.task.priority)}</span>` : ''}
          <span class="at-task-project">${escapeHtml(g.project.name)}</span>
        </div>
      `).join('')}
    </div>
  `).join('');

  // Click any task → navigate to its source list and expand it
  list.querySelectorAll('.at-task').forEach(el => {
    el.addEventListener('click', () => {
      const pid = el.dataset.projectId;
      const tid = el.dataset.taskId;
      if (!pid || !tid) return;
      let spaceId = null, itemId = null;
      (state.spaces || []).forEach(sp => {
        (sp.items || []).forEach(it => {
          if ((it.type === 'list' || it.type === 'meeting' || it.type === 'visit') && it.refId === pid) {
            spaceId = sp.id; itemId = it.id;
          }
        });
      });
      if (spaceId && itemId && typeof selectSpaceItem === 'function') {
        selectSpaceItem(spaceId, itemId);
      } else {
        state.currentRobotId = pid;
        if (typeof activateSection === 'function') activateSection('robots');
        if (typeof selectRobot === 'function') selectRobot(pid);
      }
      setTimeout(() => {
        const robot = (state.robots||[]).find(r => r.id === pid)
                  || (state.meetings||[]).find(r => r.id === pid)
                  || (state.fieldVisits||[]).find(r => r.id === pid);
        const t = robot && (robot.tasks || []).find(x => x.id === tid);
        if (t) { t.expanded = true; if (typeof renderCurrentDetail === 'function') renderCurrentDetail(); }
        const node = document.getElementById('task-' + tid);
        if (node) { node.scrollIntoView({ block: 'center', behavior: 'smooth' }); node.classList.add('flash-highlight'); setTimeout(() => node.classList.remove('flash-highlight'), 1400); }
      }, 60);
    });
  });
}

document.querySelectorAll('#at-filter .at-filter-btn').forEach(b => {
  b.addEventListener('click', () => {
    document.querySelectorAll('#at-filter .at-filter-btn').forEach(x => x.classList.remove('active'));
    b.classList.add('active');
    allTasksFilter = b.dataset.filter;
    renderAllTasks();
  });
});

// ── CALENDAR ───────────────────────────────────────────
// Compact month grid: each day cell renders the date number plus 1–3 thin
// colored bars indicating event types for that day. Tapping a cell pops
// the existing day panel below for full details. Trades readable inline
// labels for a calendar-app-style overview that fits a phone width.
let calMonth = (() => { const d = new Date(); return { y: d.getFullYear(), m: d.getMonth() }; })();
let calSelected = null; // 'YYYY-MM-DD'
const DOW = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
const MONTH_NAMES = ['January','February','March','April','May','June','July','August','September','October','November','December'];

function ymd(d) {
  const yr = d.getFullYear(), mo = String(d.getMonth()+1).padStart(2,'0'), da = String(d.getDate()).padStart(2,'0');
  return `${yr}-${mo}-${da}`;
}

function renderCalendar() {
  const grid = document.getElementById('cal-grid');
  const title = document.getElementById('cal-title');
  if (!grid || !title) return;
  title.textContent = `${MONTH_NAMES[calMonth.m]} ${calMonth.y}`;

  const first = new Date(calMonth.y, calMonth.m, 1);
  const startDow = (first.getDay() + 6) % 7; // Mon=0
  const daysInMonth = new Date(calMonth.y, calMonth.m + 1, 0).getDate();
  const todayStr = ymd(new Date());

  // Pre-index events by date — calendar is mode-agnostic, show everything
  const eventsByDate = {};
  (state.meetings || []).forEach(m => {
    if (!m.date) return;
    (eventsByDate[m.date] = eventsByDate[m.date] || []).push({ kind: 'meeting', mode: m.mode || 'job', label: m.title, id: m.id });
  });
  (state.fieldVisits || []).forEach(v => {
    if (!v.date) return;
    (eventsByDate[v.date] = eventsByDate[v.date] || []).push({ kind: 'visit', mode: v.mode || 'job', label: v.location || 'Visit', id: v.id });
  });
  (state.robots || []).forEach(r => {
    (r.tasks || []).forEach(task => {
      if (!task.dueDate || task.status === 'done') return;
      (eventsByDate[task.dueDate] = eventsByDate[task.dueDate] || []).push({ kind: 'task', mode: r.mode || 'job', label: task.title, id: task.id, refId: r.id });
    });
  });
  (state.calendarEvents || []).forEach(ev => {
    if (!ev.date) return;
    (eventsByDate[ev.date] = eventsByDate[ev.date] || []).push({ kind: 'event', mode: 'job', label: ev.title || 'Event', id: ev.id });
  });

  let html = DOW.map(d => `<div class="cal-dow">${d}</div>`).join('');

  // Previous month tail
  const prevMonthDays = new Date(calMonth.y, calMonth.m, 0).getDate();
  for (let i = startDow - 1; i >= 0; i--) {
    const dn = prevMonthDays - i;
    const d = new Date(calMonth.y, calMonth.m - 1, dn);
    html += renderCalDay(d, eventsByDate, todayStr, true);
  }
  // Current month
  for (let dn = 1; dn <= daysInMonth; dn++) {
    const d = new Date(calMonth.y, calMonth.m, dn);
    html += renderCalDay(d, eventsByDate, todayStr, false);
  }
  // Trailing blanks (fill to multiple of 7)
  const total = startDow + daysInMonth;
  const trailing = (7 - (total % 7)) % 7;
  for (let i = 1; i <= trailing; i++) {
    const d = new Date(calMonth.y, calMonth.m + 1, i);
    html += renderCalDay(d, eventsByDate, todayStr, true);
  }

  grid.innerHTML = html;

  // Wire clicks
  grid.querySelectorAll('.cal-day').forEach(cell => {
    cell.addEventListener('click', () => {
      calSelected = cell.dataset.date;
      grid.querySelectorAll('.cal-day').forEach(c => c.classList.remove('selected'));
      cell.classList.add('selected');
      renderCalDayPanel();
    });
  });
  // Pills inside cells: jump straight to the entity, don't just select the day
  grid.querySelectorAll('[data-go-meeting]').forEach(pill => {
    pill.addEventListener('click', e => { e.stopPropagation(); goToMeeting(pill.dataset.goMeeting); });
  });
  grid.querySelectorAll('[data-go-visit]').forEach(pill => {
    pill.addEventListener('click', e => { e.stopPropagation(); goToVisit(pill.dataset.goVisit); });
  });

  if (calSelected) renderCalDayPanel();
}

function renderCalDay(d, eventsByDate, todayStr, otherMonth) {
  const dStr = ymd(d);
  const events = eventsByDate[dStr] || [];
  const classes = ['cal-day'];
  if (otherMonth)         classes.push('other-mo');
  if (dStr === todayStr)  classes.push('today');
  if (dStr === calSelected) classes.push('selected');
  // Up to 3 thin colored bars representing the event types present this
  // day. Order: meeting → task → visit → event. Duplicates collapsed.
  const kinds = [];
  const seen = {};
  for (const ev of events) {
    if (seen[ev.kind]) continue;
    seen[ev.kind] = true;
    kinds.push(ev.kind);
    if (kinds.length >= 3) break;
  }
  const barsHtml = kinds.map(k => `<span class="cal-bar ${escapeAttr(k)}"></span>`).join('');
  return `
    <div class="${classes.join(' ')}" data-date="${dStr}">
      <div class="cal-day-num">${d.getDate()}</div>
      <div class="cal-bars">${barsHtml}</div>
    </div>`;
}

window.goToTask = function(projectId, taskId) {
  // Locate the space-item for this list (mirrors All-Tasks click flow)
  let spaceId = null, itemId = null;
  (state.spaces || []).forEach(sp => {
    (sp.items || []).forEach(it => {
      if (it.type === 'list' && it.refId === projectId) { spaceId = sp.id; itemId = it.id; }
    });
  });
  if (spaceId && itemId && typeof selectSpaceItem === 'function') selectSpaceItem(spaceId, itemId);
  else { state.currentRobotId = projectId; activateSection('robots'); renderRobotList(); renderRobotDetail(); }
  const robot = (state.robots || []).find(r => r.id === projectId);
  const task = robot && (robot.tasks || []).find(t => t.id === taskId);
  if (task) { task.expanded = true; renderRobotDetail(); }
};

// ── Calendar event picker ─────────────────────────────
function openCalAddPicker(date) {
  const modal = document.getElementById('modal-cal-add');
  if (!modal) return;
  modal.dataset.date = date;
  modal.classList.add('open');
}
function closeCalAddPicker() {
  document.getElementById('modal-cal-add')?.classList.remove('open');
}
function handleCalAddPick(kind) {
  const modal = document.getElementById('modal-cal-add');
  const date = modal?.dataset.date;
  closeCalAddPicker();
  if (!date) return;
  if (kind === 'task') {
    // Reuse the quick-capture modal pre-filled with this date
    openQuickCapture();
    setTimeout(() => {
      const dueInput = document.getElementById('quick-due-input');
      if (dueInput) dueInput.value = date;
    }, 60);
  } else if (kind === 'meeting') {
    document.getElementById('meeting-title').value     = '';
    document.getElementById('meeting-date').value      = date;
    document.getElementById('meeting-location').value  = '';
    document.getElementById('meeting-attendees').value = '';
    document.getElementById('meeting-robot').value     = '';
    editingMeetingId = null;
    openModal('modal-meeting');
    setTimeout(() => document.getElementById('meeting-title').focus(), 50);
  } else if (kind === 'event') {
    openCalEventModal(date);
  }
}

function openCalEventModal(date) {
  const modal = document.getElementById('modal-cal-event');
  if (!modal) return;
  modal.dataset.date = date;
  document.getElementById('cal-event-title').value = '';
  document.getElementById('cal-event-time').value  = '';
  document.getElementById('cal-event-notes').value = '';
  modal.classList.add('open');
  setTimeout(() => document.getElementById('cal-event-title').focus(), 50);
}
function closeCalEventModal() { document.getElementById('modal-cal-event')?.classList.remove('open'); }
function saveCalEvent() {
  const modal = document.getElementById('modal-cal-event');
  const date = modal?.dataset.date;
  const title = document.getElementById('cal-event-title').value.trim();
  const time  = document.getElementById('cal-event-time').value.trim();
  const notes = document.getElementById('cal-event-notes').value.trim();
  if (!title || !date) { document.getElementById('cal-event-title').focus(); return; }
  if (!state.calendarEvents) state.calendarEvents = [];
  state.calendarEvents.push({ id: uid(), date, title, time: time || null, notes: notes || '', createdAt: Date.now() });
  save();
  closeCalEventModal();
  renderCalendar();
}

(function wireCalAdd() {
  const wire = () => {
    const overlay1 = document.getElementById('modal-cal-add');
    const overlay2 = document.getElementById('modal-cal-event');
    if (overlay1 && !overlay1.dataset.bound) {
      overlay1.dataset.bound = '1';
      overlay1.addEventListener('click', e => { if (e.target === overlay1) closeCalAddPicker(); });
      overlay1.querySelectorAll('[data-close="modal-cal-add"]').forEach(b => b.addEventListener('click', closeCalAddPicker));
      overlay1.querySelectorAll('[data-cal-pick]').forEach(b => b.addEventListener('click', () => handleCalAddPick(b.dataset.calPick)));
    }
    if (overlay2 && !overlay2.dataset.bound) {
      overlay2.dataset.bound = '1';
      overlay2.addEventListener('click', e => { if (e.target === overlay2) closeCalEventModal(); });
      overlay2.querySelectorAll('[data-close="modal-cal-event"]').forEach(b => b.addEventListener('click', closeCalEventModal));
      document.getElementById('cal-event-save')?.addEventListener('click', saveCalEvent);
    }
  };
  wire();
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', wire);
})();

window.goToMeeting = function(id) {
  state.currentMeetingId = id;
  const tab = document.querySelector('.tab[data-tab="meetings"]');
  if (tab) tab.click();
  if (typeof renderMeetingList === 'function')   renderMeetingList();
  if (typeof renderMeetingDetail === 'function') renderMeetingDetail();
};

window.goToVisit = function(id) {
  const tab = document.querySelector('.tab[data-tab="field-visits"]');
  if (tab) tab.click();
  // renderVisits has run via the tab click; scroll to the card
  setTimeout(() => {
    const el = document.getElementById('visit-' + id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('flash');
      setTimeout(() => el.classList.remove('flash'), 1400);
    }
  }, 50);
};

function renderCalDayPanel() {
  const panel = document.getElementById('cal-day-panel');
  if (!panel) return;
  if (!calSelected) {
    panel.innerHTML = `<div class="cal-day-empty">${t('empty.select_day')}</div>`;
    return;
  }
  const d = new Date(calSelected + 'T00:00:00');
  const dateStr = `${d.getDate()} ${MONTH_NAMES[d.getMonth()].slice(0,3)} ${d.getFullYear()}`;

  const meetings = (state.meetings || []).filter(m => m.date === calSelected);
  const visits   = (state.fieldVisits || []).filter(v => v.date === calSelected);
  const events   = (state.calendarEvents || []).filter(ev => ev.date === calSelected);
  const tasks    = [];
  (state.robots || []).forEach(r => (r.tasks || []).forEach(task => {
    if (task.dueDate === calSelected && task.status !== 'done') tasks.push({ task, project: r });
  }));
  const notes    = (state.calendarNotes || {})[calSelected] || '';

  panel.innerHTML = `
    <div class="cal-day-header">
      <div class="cal-day-title">${dateStr}</div>
      <button class="btn-ghost cal-add-event-btn" id="cal-add-event-btn" type="button">+ Add</button>
    </div>
    ${tasks.length ? `
      <div>
        <div class="cal-day-section-label">Tasks</div>
        ${tasks.map(it => `<div class="cal-day-item clickable" data-go-task="${escapeAttr(it.project.id)}|${escapeAttr(it.task.id)}"><strong>${escapeHtml(it.task.title)}</strong> · ${escapeHtml(it.project.name)}</div>`).join('')}
      </div>` : ''}
    ${meetings.length ? `
      <div>
        <div class="cal-day-section-label">${t('cal.meetings')}</div>
        ${meetings.map(m => `<div class="cal-day-item clickable" data-go-meeting="${m.id}"><strong>${escapeHtml(m.title)}</strong>${m.location ? ' · ' + escapeHtml(m.location) : ''}</div>`).join('')}
      </div>` : ''}
    ${visits.length ? `
      <div>
        <div class="cal-day-section-label">${t('cal.visits')}</div>
        ${visits.map(v => `<div class="cal-day-item clickable" data-go-visit="${v.id}"><strong>${escapeHtml(v.location)}</strong>${v.robot ? ' · ' + escapeHtml(v.robot) : ''}</div>`).join('')}
      </div>` : ''}
    ${events.length ? `
      <div>
        <div class="cal-day-section-label">Events</div>
        ${events.map(ev => `<div class="cal-day-item cal-event-item">
          <div><strong>${escapeHtml(ev.title)}</strong>${ev.time ? ' · ' + escapeHtml(ev.time) : ''}</div>
          ${ev.notes ? `<div class="cal-event-notes">${escapeHtml(ev.notes)}</div>` : ''}
          <button class="cal-event-del" data-del-event="${escapeAttr(ev.id)}" type="button" aria-label="Delete">×</button>
        </div>`).join('')}
      </div>` : ''}
    <div>
      <div class="cal-day-section-label">${t('cal.notes')}</div>
      <textarea class="cal-notes" id="cal-notes-area" placeholder="${escapeAttr(t('cal.notes_placeholder'))}">${escapeHtml(notes)}</textarea>
    </div>
  `;
  panel.querySelectorAll('[data-go-meeting]').forEach(el => {
    el.addEventListener('click', () => goToMeeting(el.dataset.goMeeting));
  });
  panel.querySelectorAll('[data-go-visit]').forEach(el => {
    el.addEventListener('click', () => goToVisit(el.dataset.goVisit));
  });
  panel.querySelectorAll('[data-go-task]').forEach(el => {
    el.addEventListener('click', () => {
      const [pid, tid] = el.dataset.goTask.split('|');
      goToTask(pid, tid);
    });
  });
  panel.querySelectorAll('[data-del-event]').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const id = el.dataset.delEvent;
      if (!confirm('Delete this event?')) return;
      state.calendarEvents = (state.calendarEvents || []).filter(ev => ev.id !== id);
      save();
      renderCalendar();
    });
  });
  document.getElementById('cal-add-event-btn')?.addEventListener('click', () => openCalAddPicker(calSelected));

  const ta = document.getElementById('cal-notes-area');
  if (ta) {
    let t;
    ta.addEventListener('input', () => {
      clearTimeout(t);
      t = setTimeout(() => {
        if (!state.calendarNotes) state.calendarNotes = {};
        if (ta.value) state.calendarNotes[calSelected] = ta.value;
        else delete state.calendarNotes[calSelected];
        save();
      }, 500);
    });
  }
}

// Calendar nav
(function initCalendarNav() {
  const prev  = document.getElementById('cal-prev');
  const next  = document.getElementById('cal-next');
  const today = document.getElementById('cal-today');
  if (prev)  prev.addEventListener('click',  () => { calMonth.m--; if (calMonth.m < 0)  { calMonth.m = 11; calMonth.y--; } renderCalendar(); });
  if (next)  next.addEventListener('click',  () => { calMonth.m++; if (calMonth.m > 11) { calMonth.m = 0;  calMonth.y++; } renderCalendar(); });
  if (today) today.addEventListener('click', () => {
    const d = new Date();
    calMonth = { y: d.getFullYear(), m: d.getMonth() };
    calSelected = ymd(d);
    renderCalendar();
  });
})();

// ── JOURNAL ────────────────────────────────────────────
let jrnSelected = ymd(new Date());
let jrnSaveTimer = null;

function initJournal() {
  const dateInput = document.getElementById('jrn-date');
  const area      = document.getElementById('jrn-area');
  const status    = document.getElementById('jrn-status');
  const todayBtn  = document.getElementById('jrn-today-btn');
  if (!dateInput || !area) return;

  dateInput.value = jrnSelected;

  function loadEntry() {
    const entries = state.journal || {};
    area.value = entries[jrnSelected] || '';
    renderJournalList();
  }

  function saveEntry() {
    if (!state.journal) state.journal = {};
    const v = area.value;
    if (v.trim()) state.journal[jrnSelected] = v;
    else delete state.journal[jrnSelected];
    save();
    if (status) {
      status.textContent = 'Saved';
      status.classList.add('show');
      setTimeout(() => status.classList.remove('show'), 1200);
    }
    renderJournalList();
  }

  dateInput.addEventListener('change', () => {
    jrnSelected = dateInput.value;
    loadEntry();
  });

  area.addEventListener('input', () => {
    clearTimeout(jrnSaveTimer);
    jrnSaveTimer = setTimeout(saveEntry, 500);
  });

  if (todayBtn) {
    todayBtn.addEventListener('click', () => {
      jrnSelected = ymd(new Date());
      dateInput.value = jrnSelected;
      loadEntry();
      area.focus();
    });
  }

  loadEntry();
}

function renderJournalList() {
  const list = document.getElementById('jrn-list');
  if (!list) return;
  const entries = state.journal || {};
  const dates = Object.keys(entries).sort().reverse();
  if (dates.length === 0) {
    list.innerHTML = `<div class="jrn-empty">${t('empty.no_journal')}</div>`;
    return;
  }
  const fmt = (d) => {
    const dt = new Date(d + 'T00:00:00');
    return `${dt.getDate()} ${MONTH_NAMES[dt.getMonth()].slice(0,3)} ${dt.getFullYear()}`;
  };
  list.innerHTML = dates.map(d => {
    const text = entries[d] || '';
    const preview = text.replace(/\n/g, ' ').slice(0, 80);
    const active = d === jrnSelected ? 'active' : '';
    return `
      <div class="jrn-entry ${active}" data-date="${d}">
        <div class="jrn-entry-date">${fmt(d)}</div>
        <div class="jrn-entry-preview">${preview}</div>
      </div>`;
  }).join('');

  list.querySelectorAll('.jrn-entry').forEach(el => {
    el.addEventListener('click', () => {
      jrnSelected = el.dataset.date;
      const dateInput = document.getElementById('jrn-date');
      const area = document.getElementById('jrn-area');
      if (dateInput) dateInput.value = jrnSelected;
      if (area) area.value = (state.journal || {})[jrnSelected] || '';
      list.querySelectorAll('.jrn-entry').forEach(e => e.classList.remove('active'));
      el.classList.add('active');
    });
  });
}

// ── THEME TOGGLE (light / dim / dark) ────────────────
const THEME_KEY = 'b-less-theme';
const THEME_COLORS = { light: '#ffffff', dim: '#1c1f25', dark: '#000000' };
function applyTheme(name) {
  const t = THEME_COLORS[name] ? name : 'light';
  document.documentElement.setAttribute('data-theme', t);
  document.querySelectorAll('.theme-toggle-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.themeSet === t);
  });
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute('content', THEME_COLORS[t]);
}
function setTheme(name) {
  try { localStorage.setItem(THEME_KEY, name); } catch {}
  applyTheme(name);
}
(function initTheme() {
  let saved = null;
  try { saved = localStorage.getItem(THEME_KEY); } catch {}
  applyTheme(saved || 'light');
})();

// ── DAILY / JOB MODE SWITCHER ──────────────────────────
function ensureFinanceState() {
  if (!state.finance || typeof state.finance !== 'object') state.finance = {};
  if (!Array.isArray(state.finance.subscriptions)) state.finance.subscriptions = [];
  if (!Array.isArray(state.finance.expenses)) state.finance.expenses = [];
}

function financeMonthKey(date = new Date()) {
  return ymd(date).slice(0, 7);
}

function shiftMonthKey(monthKey, delta) {
  const [y, m] = monthKey.split('-').map(Number);
  const d = new Date(y, (m - 1) + delta, 1);
  return ymd(d).slice(0, 7);
}

function formatMonthKey(monthKey) {
  const [y, m] = monthKey.split('-').map(Number);
  const d = new Date(y, m - 1, 1);
  return `${MONTH_NAMES[d.getMonth()]} ${d.getFullYear()}`;
}

function syncSubscriptionExpenses(month = financeMonthKey()) {
  ensureFinanceState();
  let changed = false;
  state.finance.subscriptions.forEach(sub => {
    const autoId = `sub:${sub.id}:${month}`;
    if (state.finance.expenses.some(e => e.autoId === autoId)) return;
    const due = Math.min(Math.max(Number(sub.dueDay) || 1, 1), 28);
    state.finance.expenses.push({
      id: uid(),
      autoId,
      subscriptionId: sub.id,
      source: 'subscription',
      name: sub.name,
      amount: subMonthlyAmount(sub),
      currency: sub.currency || 'TRY',
      category: sub.category || t('fin.subscriptions'),
      date: `${month}-${String(due).padStart(2, '0')}`,
      createdAt: Date.now(),
    });
    changed = true;
  });
  if (changed) save();
}

function subMonthlyAmount(sub) {
  const amount = Number(sub.amount) || 0;
  return sub.cycle === 'yearly' ? amount / 12 : amount;
}

function formatMoney(amount, currency) {
  const cur = currency || 'TRY';
  try {
    return new Intl.NumberFormat(currentLang === 'tr' ? 'tr-TR' : 'en-US', {
      style: 'currency',
      currency: cur,
      maximumFractionDigits: amount % 1 === 0 ? 0 : 2,
    }).format(amount || 0);
  } catch {
    return `${(amount || 0).toFixed(2)} ${cur}`;
  }
}

function financeTotalsByCurrency() {
  ensureFinanceState();
  const month = financeSelectedMonth;
  return state.finance.expenses.filter(e => (e.date || '').slice(0, 7) === month).reduce((acc, expense) => {
    const cur = expense.currency || 'TRY';
    acc[cur] = (acc[cur] || 0) + (Number(expense.amount) || 0);
    return acc;
  }, {});
}

function renderFinance() {
  ensureFinanceState();
  syncSubscriptionExpenses(financeSelectedMonth);
  const summary = document.getElementById('finance-summary');
  const list = document.getElementById('subscription-list');
  const expenseList = document.getElementById('expense-list');
  const monthLabel = document.getElementById('finance-month-label');
  if (!summary || !list || !expenseList) return;
  if (monthLabel) monthLabel.textContent = formatMonthKey(financeSelectedMonth);
  const subs = state.finance.subscriptions.slice().sort((a, b) => (a.dueDay || 99) - (b.dueDay || 99) || a.name.localeCompare(b.name, 'tr'));
  const totals = financeTotalsByCurrency();
  const monthlyParts = Object.entries(totals).map(([cur, val]) => formatMoney(val, cur));
  const month = financeSelectedMonth;
  const monthExpenses = state.finance.expenses.filter(e => (e.date || '').slice(0, 7) === month)
    .sort((a, b) => (b.date || '').localeCompare(a.date || ''));
  summary.innerHTML = `
    <div class="finance-summary-grid">
      <div class="finance-summary-card"><span>${t('fin.expense_total')}</span><strong>${monthlyParts.join(' + ') || formatMoney(0, 'TRY')}</strong></div>
      <div class="finance-summary-card"><span>${t('fin.monthly_total')}</span><strong>${Object.entries(financeSubscriptionTotals()).map(([cur, val]) => formatMoney(val, cur)).join(' + ') || formatMoney(0, 'TRY')}</strong></div>
      <div class="finance-summary-card"><span>${t('fin.cycle')}</span><strong>${t('fin.count', { n: subs.length })}</strong></div>
    </div>`;
  expenseList.innerHTML = monthExpenses.length ? monthExpenses.map(expense => `
    <div class="subscription-card expense-card ${expense.source === 'subscription' ? 'auto' : ''}">
      <div class="subscription-main">
        <div class="subscription-name">${escapeHtml(expense.name)}</div>
        <div class="subscription-meta">
          <span>${escapeHtml(expense.date || '')}</span>
          ${expense.category ? `<span>${escapeHtml(expense.category)}</span>` : ''}
          ${expense.source === 'subscription' ? `<span>${t('fin.auto_subscription')}</span>` : ''}
        </div>
      </div>
      <div class="subscription-cost">
        <strong>${formatMoney(Number(expense.amount) || 0, expense.currency)}</strong>
      </div>
      <div class="subscription-actions">
        ${expense.source === 'subscription' ? '' : `<button class="btn-sm" onclick="editExpense('${expense.id}')">${t('btn.edit')}</button>`}
        ${expense.source === 'subscription' ? '' : `<button class="btn-sm danger" onclick="deleteExpense('${expense.id}')">${t('btn.delete')}</button>`}
      </div>
    </div>`).join('') : `<div class="empty-visits"><p>${t('fin.empty_expenses')}</p></div>`;
  if (!subs.length) {
    list.innerHTML = `<div class="empty-visits"><p>${t('fin.empty')}</p></div>`;
    return;
  }
  list.innerHTML = subs.map(sub => {
    const monthly = subMonthlyAmount(sub);
    const cycleLabel = sub.cycle === 'yearly' ? t('fin.per_year') : t('fin.per_month');
    return `
      <div class="subscription-card">
        <div class="subscription-main">
          <div class="subscription-name">${escapeHtml(sub.name)}</div>
          <div class="subscription-meta">
            ${sub.category ? `<span>${escapeHtml(sub.category)}</span>` : ''}
            ${sub.dueDay ? `<span>${t('fin.due_day')}: ${escapeHtml(sub.dueDay)}</span>` : ''}
          </div>
        </div>
        <div class="subscription-cost">
          <strong>${formatMoney(Number(sub.amount) || 0, sub.currency)}</strong>
          <span>${cycleLabel}</span>
          ${sub.cycle === 'yearly' ? `<em>${formatMoney(monthly, sub.currency)} ${t('fin.per_month')}</em>` : ''}
        </div>
        <div class="subscription-actions">
          <button class="btn-sm" onclick="editSubscription('${sub.id}')">${t('btn.edit')}</button>
          <button class="btn-sm danger" onclick="deleteSubscription('${sub.id}')">${t('btn.delete')}</button>
        </div>
      </div>`;
  }).join('');
}

function financeSubscriptionTotals() {
  ensureFinanceState();
  return state.finance.subscriptions.reduce((acc, sub) => {
    const cur = sub.currency || 'TRY';
    acc[cur] = (acc[cur] || 0) + subMonthlyAmount(sub);
    return acc;
  }, {});
}

function openSubscriptionModal(sub) {
  ensureFinanceState();
  editingSubscriptionId = sub ? sub.id : null;
  document.getElementById('sub-name').value = sub ? sub.name : '';
  document.getElementById('sub-amount').value = sub ? sub.amount : '';
  document.getElementById('sub-currency').value = sub ? (sub.currency || 'TRY') : 'TRY';
  document.getElementById('sub-category').value = sub ? (sub.category || '') : '';
  document.getElementById('sub-due-day').value = sub && sub.dueDay ? sub.dueDay : '';
  resetRadio('sub-cycle-group', sub ? (sub.cycle || 'monthly') : 'monthly');
  initRadioGroup('sub-cycle-group');
  document.querySelector('#modal-subscription h3').textContent = sub ? t('fin.modal_edit') : t('fin.modal_add');
  document.getElementById('save-subscription').textContent = sub ? t('btn.save_changes') : t('fin.add_subscription');
  openModal('modal-subscription');
  setTimeout(() => document.getElementById('sub-name')?.focus(), 50);
}

window.editSubscription = function(id) {
  ensureFinanceState();
  const sub = state.finance.subscriptions.find(s => s.id === id);
  if (sub) openSubscriptionModal(sub);
};

window.deleteSubscription = function(id) {
  if (!confirm(t('fin.delete_confirm'))) return;
  ensureFinanceState();
  state.finance.subscriptions = state.finance.subscriptions.filter(s => s.id !== id);
  state.finance.expenses = state.finance.expenses.filter(e => e.subscriptionId !== id);
  save();
  renderFinance();
};

function removeCurrentAutoExpenseForSub(subId) {
  const prefix = `sub:${subId}:${financeMonthKey()}`;
  state.finance.expenses = state.finance.expenses.filter(e => e.autoId !== prefix);
}

document.getElementById('add-subscription-btn')?.addEventListener('click', () => openSubscriptionModal(null));
document.getElementById('save-subscription')?.addEventListener('click', () => {
  ensureFinanceState();
  const name = document.getElementById('sub-name').value.trim();
  const amount = Number(document.getElementById('sub-amount').value);
  if (!name) { document.getElementById('sub-name').focus(); return; }
  if (!Number.isFinite(amount) || amount < 0) { document.getElementById('sub-amount').focus(); return; }
  const dueRaw = Number(document.getElementById('sub-due-day').value);
  const payload = {
    name,
    amount,
    currency: document.getElementById('sub-currency').value || 'TRY',
    cycle: getRadioValue('sub-cycle-group') || 'monthly',
    category: document.getElementById('sub-category').value.trim(),
    dueDay: Number.isFinite(dueRaw) && dueRaw >= 1 && dueRaw <= 31 ? dueRaw : null,
  };
  if (editingSubscriptionId) {
    const sub = state.finance.subscriptions.find(s => s.id === editingSubscriptionId);
    if (sub) {
      Object.assign(sub, payload);
      removeCurrentAutoExpenseForSub(sub.id);
    }
  } else {
    state.finance.subscriptions.push({ id: uid(), ...payload, createdAt: Date.now() });
  }
  save();
  renderFinance();
  closeModal('modal-subscription');
});

function openExpenseModal(expense) {
  ensureFinanceState();
  editingExpenseId = expense ? expense.id : null;
  const fallbackDay = Math.min(new Date().getDate(), 28);
  document.getElementById('expense-name').value = expense ? expense.name : '';
  document.getElementById('expense-amount').value = expense ? expense.amount : '';
  document.getElementById('expense-currency').value = expense ? (expense.currency || 'TRY') : 'TRY';
  document.getElementById('expense-date').value = expense ? expense.date : `${financeSelectedMonth}-${String(fallbackDay).padStart(2, '0')}`;
  document.getElementById('expense-category').value = expense ? (expense.category || '') : '';
  document.querySelector('#modal-expense h3').textContent = expense ? t('fin.modal_expense_edit') : t('fin.modal_expense_add');
  document.getElementById('save-expense').textContent = expense ? t('btn.save_changes') : t('fin.add_expense');
  openModal('modal-expense');
  setTimeout(() => document.getElementById('expense-name')?.focus(), 50);
}

window.editExpense = function(id) {
  ensureFinanceState();
  const expense = state.finance.expenses.find(e => e.id === id && e.source !== 'subscription');
  if (expense) openExpenseModal(expense);
};

window.deleteExpense = function(id) {
  if (!confirm(t('fin.delete_expense_confirm'))) return;
  ensureFinanceState();
  state.finance.expenses = state.finance.expenses.filter(e => e.id !== id);
  save();
  renderFinance();
};

document.getElementById('add-expense-btn')?.addEventListener('click', () => openExpenseModal(null));
document.getElementById('finance-prev-month')?.addEventListener('click', () => {
  financeSelectedMonth = shiftMonthKey(financeSelectedMonth, -1);
  renderFinance();
});
document.getElementById('finance-next-month')?.addEventListener('click', () => {
  financeSelectedMonth = shiftMonthKey(financeSelectedMonth, 1);
  renderFinance();
});
document.getElementById('save-expense')?.addEventListener('click', () => {
  ensureFinanceState();
  const name = document.getElementById('expense-name').value.trim();
  const amount = Number(document.getElementById('expense-amount').value);
  const date = document.getElementById('expense-date').value || ymd(new Date());
  if (!name) { document.getElementById('expense-name').focus(); return; }
  if (!Number.isFinite(amount) || amount < 0) { document.getElementById('expense-amount').focus(); return; }
  const payload = {
    name,
    amount,
    date,
    currency: document.getElementById('expense-currency').value || 'TRY',
    category: document.getElementById('expense-category').value.trim(),
    source: 'manual',
  };
  if (editingExpenseId) {
    const expense = state.finance.expenses.find(e => e.id === editingExpenseId);
    if (expense) Object.assign(expense, payload);
  } else {
    state.finance.expenses.push({ id: uid(), ...payload, createdAt: Date.now() });
  }
  save();
  renderFinance();
  closeModal('modal-expense');
});

// ── PURCHASES ──────────────────────────────────────────
// Lightweight procurement tracker: each item moves through
// wishlist → buying → done, optionally linked to a project (robot).
const PURCHASE_STATUSES = ['wishlist', 'buying', 'done'];

function ensurePurchases() {
  if (!Array.isArray(state.purchases)) state.purchases = [];
}

function refreshPurchaseRobotSelect(selectedRobotId) {
  const sel = document.getElementById('purchase-robot');
  if (!sel) return;
  const noneLabel = t('purchases.f.project_none') || '— None —';
  const opts = [`<option value="">${escapeHtml(noneLabel)}</option>`];
  (state.robots || [])
    .slice()
    .sort((a, b) => (a.name || '').localeCompare(b.name || '', 'tr'))
    .forEach(r => {
      opts.push(`<option value="${r.id}" ${r.id === selectedRobotId ? 'selected' : ''}>${escapeHtml(r.name || '?')}</option>`);
    });
  sel.innerHTML = opts.join('');
}

function purchaseStatusLabel(status) {
  return t('purchases.status.' + status) || status;
}

function renderPurchases() {
  ensurePurchases();
  const listEl = document.getElementById('purchases-list');
  const sumEl  = document.getElementById('purchases-summary');
  if (!listEl) return;

  // Summary counts
  const counts = { wishlist: 0, buying: 0, done: 0 };
  state.purchases.forEach(p => { if (counts[p.status] !== undefined) counts[p.status]++; });
  if (sumEl) {
    sumEl.innerHTML = `
      <div class="finance-summary-grid">
        <div class="finance-summary-card"><span>${escapeHtml(purchaseStatusLabel('wishlist'))}</span><strong>${counts.wishlist}</strong></div>
        <div class="finance-summary-card"><span>${escapeHtml(purchaseStatusLabel('buying'))}</span><strong>${counts.buying}</strong></div>
        <div class="finance-summary-card"><span>${escapeHtml(purchaseStatusLabel('done'))}</span><strong>${counts.done}</strong></div>
      </div>`;
  }

  // Filter buttons reflect current state
  document.querySelectorAll('#purchases-filter [data-purchases-filter]').forEach(b => {
    b.classList.toggle('active', b.dataset.purchasesFilter === purchasesFilter);
  });

  const filtered = state.purchases.filter(p =>
    purchasesFilter === 'all' ? true : p.status === purchasesFilter
  );

  if (!filtered.length) {
    listEl.innerHTML = `<div class="space-empty" style="padding:24px;text-align:center;">${escapeHtml(t('purchases.empty') || 'No purchases yet.')}</div>`;
    return;
  }

  // Sort: wishlist → buying → done, then most recently created first
  const order = { wishlist: 0, buying: 1, done: 2 };
  filtered.sort((a, b) => {
    const so = (order[a.status] ?? 9) - (order[b.status] ?? 9);
    if (so !== 0) return so;
    return (b.createdAt || 0) - (a.createdAt || 0);
  });

  listEl.innerHTML = filtered.map(p => {
    const robot = p.robotId ? (state.robots || []).find(r => r.id === p.robotId) : null;
    const priceParts = [];
    if (p.estPrice != null && p.estPrice !== '')   priceParts.push(`<span class="purchase-price-est">${escapeHtml(t('purchases.f.est') || 'Est')}: ${formatMoney(Number(p.estPrice), p.currency || 'TRY')}</span>`);
    if (p.actPrice != null && p.actPrice !== '')   priceParts.push(`<span class="purchase-price-act">${escapeHtml(t('purchases.f.actual') || 'Actual')}: ${formatMoney(Number(p.actPrice), p.currency || 'TRY')}</span>`);
    const meta = [];
    const ico = {
      folder:   '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
      supplier: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
      link:     '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
    };
    if (robot)      meta.push(`<span class="purchase-meta-chip">${ico.folder}${escapeHtml(robot.name)}</span>`);
    if (p.supplier) meta.push(`<span class="purchase-meta-chip">${ico.supplier}${escapeHtml(p.supplier)}</span>`);
    if (p.url)      meta.push(`<a class="purchase-meta-chip" href="${escapeHtml(p.url)}" target="_blank" rel="noopener noreferrer">${ico.link}${escapeHtml(t('purchases.f.url') || 'Link')}</a>`);
    const dates = [];
    if (p.dateRequest)  dates.push(`<span>${escapeHtml(t('purchases.f.date_request') || 'Req')}: ${escapeHtml(p.dateRequest)}</span>`);
    if (p.dateOrder)    dates.push(`<span>${escapeHtml(t('purchases.f.date_order') || 'Ord')}: ${escapeHtml(p.dateOrder)}</span>`);
    if (p.dateDelivery) dates.push(`<span>${escapeHtml(t('purchases.f.date_delivery') || 'Del')}: ${escapeHtml(p.dateDelivery)}</span>`);

    const statusOpts = PURCHASE_STATUSES.map(s =>
      `<option value="${s}" ${p.status === s ? 'selected' : ''}>${escapeHtml(purchaseStatusLabel(s))}</option>`
    ).join('');

    return `
      <div class="purchase-row purchase-status-${p.status}" data-purchase-id="${p.id}">
        <div class="purchase-row-main">
          <div class="purchase-row-head">
            <div class="purchase-name">${escapeHtml(p.name || '(no name)')}</div>
            <select class="purchase-status-select" data-purchase-status="${p.id}">${statusOpts}</select>
          </div>
          ${meta.length ? `<div class="purchase-row-meta">${meta.join('')}</div>` : ''}
          ${priceParts.length ? `<div class="purchase-row-prices">${priceParts.join(' ')}</div>` : ''}
          ${dates.length ? `<div class="purchase-row-dates">${dates.join(' · ')}</div>` : ''}
          ${p.notes ? `<div class="purchase-row-notes">${escapeHtml(p.notes)}</div>` : ''}
        </div>
        <div class="purchase-row-actions">
          <button class="btn-sm" data-purchase-edit="${p.id}">${escapeHtml(t('btn.edit') || 'Edit')}</button>
        </div>
      </div>`;
  }).join('');

  // Wire up
  listEl.querySelectorAll('[data-purchase-edit]').forEach(b => {
    b.addEventListener('click', () => openPurchaseModal(state.purchases.find(p => p.id === b.dataset.purchaseEdit)));
  });
  listEl.querySelectorAll('.purchase-status-select').forEach(sel => {
    sel.addEventListener('click', e => e.stopPropagation());
    sel.addEventListener('change', () => {
      const p = state.purchases.find(x => x.id === sel.dataset.purchaseStatus);
      if (!p) return;
      p.status = sel.value;
      // Auto-stamp delivery date when moving to done
      if (p.status === 'done' && !p.dateDelivery) p.dateDelivery = ymd(new Date());
      save();
      renderPurchases();
    });
  });
}

function openPurchaseModal(purchase) {
  ensurePurchases();
  editingPurchaseId = purchase ? purchase.id : null;
  refreshPurchaseRobotSelect(purchase ? purchase.robotId : null);
  document.getElementById('purchase-name').value     = purchase ? (purchase.name || '') : '';
  document.getElementById('purchase-status').value   = purchase ? (purchase.status || 'wishlist') : 'wishlist';
  document.getElementById('purchase-est').value      = purchase && purchase.estPrice != null ? purchase.estPrice : '';
  document.getElementById('purchase-actual').value   = purchase && purchase.actPrice != null ? purchase.actPrice : '';
  document.getElementById('purchase-currency').value = purchase ? (purchase.currency || 'TRY') : 'TRY';
  document.getElementById('purchase-supplier').value = purchase ? (purchase.supplier || '') : '';
  document.getElementById('purchase-url').value      = purchase ? (purchase.url || '') : '';
  document.getElementById('purchase-date-request').value  = purchase ? (purchase.dateRequest  || '') : '';
  document.getElementById('purchase-date-order').value    = purchase ? (purchase.dateOrder    || '') : '';
  document.getElementById('purchase-date-delivery').value = purchase ? (purchase.dateDelivery || '') : '';
  document.getElementById('purchase-notes').value    = purchase ? (purchase.notes || '') : '';
  const titleEl = document.getElementById('modal-purchase-title');
  if (titleEl) titleEl.textContent = purchase ? (t('purchases.modal_edit') || 'Edit Purchase') : (t('purchases.modal_add') || 'Add Purchase');
  const delBtn = document.getElementById('purchase-delete-btn');
  if (delBtn) delBtn.style.display = purchase ? '' : 'none';
  openModal('modal-purchase');
}

document.getElementById('add-purchase-btn')?.addEventListener('click', () => openPurchaseModal(null));

document.getElementById('save-purchase')?.addEventListener('click', () => {
  ensurePurchases();
  const name = (document.getElementById('purchase-name').value || '').trim();
  if (!name) {
    document.getElementById('purchase-name').focus();
    return;
  }
  const robotSel = document.getElementById('purchase-robot');
  const payload = {
    name,
    status:       document.getElementById('purchase-status').value || 'wishlist',
    robotId:      robotSel ? (robotSel.value || null) : null,
    estPrice:     document.getElementById('purchase-est').value    || null,
    actPrice:     document.getElementById('purchase-actual').value || null,
    currency:     document.getElementById('purchase-currency').value || 'TRY',
    supplier:     (document.getElementById('purchase-supplier').value || '').trim(),
    url:          (document.getElementById('purchase-url').value || '').trim(),
    dateRequest:  document.getElementById('purchase-date-request').value || null,
    dateOrder:    document.getElementById('purchase-date-order').value   || null,
    dateDelivery: document.getElementById('purchase-date-delivery').value || null,
    notes:        (document.getElementById('purchase-notes').value || '').trim(),
  };
  if (editingPurchaseId) {
    const p = state.purchases.find(x => x.id === editingPurchaseId);
    if (p) Object.assign(p, payload);
  } else {
    state.purchases.push({ id: uid(), ...payload, createdAt: Date.now() });
  }
  save();
  renderPurchases();
  closeModal('modal-purchase');
});

document.getElementById('purchase-delete-btn')?.addEventListener('click', () => {
  if (!editingPurchaseId) return;
  if (!confirm(t('purchases.confirm_delete') || 'Delete this purchase?')) return;
  state.purchases = state.purchases.filter(p => p.id !== editingPurchaseId);
  save();
  renderPurchases();
  closeModal('modal-purchase');
});

document.querySelectorAll('#purchases-filter [data-purchases-filter]').forEach(btn => {
  btn.addEventListener('click', () => {
    purchasesFilter = btn.dataset.purchasesFilter;
    renderPurchases();
  });
});

// ── TOOLS / CALCULATORS (owner-only) ───────────────────
// Extensible registry. To add a new calculator, push an entry to CALCULATORS:
//   { id, title, subtitle, icon, render(container) }
// Each render() builds the calculator's UI inside the given container.

// Standard Turkish "gırtlak hortum" / spiral conduit sizes (PA/PE).
// Inner diameter (ID) values are nominal — verify on the actual product datasheet.
const HOSE_SIZES = [
  { name: 'AD 7,5',  od: 7.5,  id: 4.5  },
  { name: 'AD 10',   od: 10,   id: 6.5  },
  { name: 'AD 13',   od: 13,   id: 9.7  },
  { name: 'AD 15,5', od: 15.5, id: 11.7 },
  { name: 'AD 18',   od: 18.0, id: 14.0 },
  { name: 'AD 21,2', od: 21.2, id: 17.0 },
  { name: 'AD 25',   od: 25.0, id: 20.0 },
  { name: 'AD 28,5', od: 28.5, id: 23.0 },
  { name: 'AD 34,5', od: 34.5, id: 29.0 },
  { name: 'AD 42,5', od: 42.5, id: 36.0 },
  { name: 'AD 54,5', od: 54.5, id: 48.0 },
];

function _circleArea(d) { return Math.PI * (d / 2) * (d / 2); }
function _idForFill(sumArea, fill) { return 2 * Math.sqrt(sumArea / (Math.PI * fill)); }

function computeConduitFromCables(diameters) {
  const ds = diameters.filter(d => Number.isFinite(d) && d > 0);
  if (!ds.length) return null;
  const sumArea = ds.reduce((s, d) => s + _circleArea(d), 0);
  const sumDia  = ds.reduce((s, d) => s + d, 0);
  const maxDia  = Math.max(...ds);

  // Geometric minimum (cables can't be smaller than this physically)
  let geomMin;
  if (ds.length === 1)      geomMin = ds[0];
  else if (ds.length === 2) geomMin = ds[0] + ds[1]; // 2 circles tangent
  else                       geomMin = 2 * Math.sqrt(sumArea / (Math.PI * 0.9069)); // close-pack limit

  // Practical fill-based recommendations
  const idTight   = ds.length >= 2 ? Math.max(geomMin + 0.5, _idForFill(sumArea, 0.55)) : maxDia + 0.5;
  const idStd     = _idForFill(sumArea, 0.40);   // 2+ cable NEC standard
  const idComfort = _idForFill(sumArea, 0.30);   // long / bendy runs

  // Find smallest standard hose ≥ idStd
  const pickHose = (minId) => HOSE_SIZES.find(h => h.id >= minId) || HOSE_SIZES[HOSE_SIZES.length - 1];

  return {
    ds, sumArea, sumDia, geomMin,
    idTight, idStd, idComfort,
    hoseTight:   pickHose(idTight),
    hoseStd:     pickHose(idStd),
    hoseComfort: pickHose(idComfort),
  };
}

const CALCULATORS = [
  {
    id: 'cable-conduit',
    title: 'Cable conduit',
    subtitle: 'Compute the minimum conduit inner diameter and a suitable nominal size to fit multiple cables.',
    icon: '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12c2 0 2-3 4-3s2 6 4 6 2-6 4-6 2 3 4 3"/><circle cx="3" cy="12" r="1.6"/><circle cx="21" cy="12" r="1.6"/></svg>',
    render(container) {
      // Default rows reflect the use case the owner asked about
      let cables = [
        { label: '6×0.22 (Ø5.30)', d: 5.30 },
        { label: 'Cable 2',         d: 5.40 },
      ];

      const html = `
        <div class="calc-card">
          <h3 class="calc-title">Cable → conduit diameter</h3>
          <p class="calc-help">Enter the <strong>outer diameter</strong> in mm of every cable you want to pull through the conduit. The result shows the geometric minimum, the inner diameter required at 40% and 30% fill ratios, and the matching nominal conduit size.</p>
          <div class="calc-rows" id="cc-rows"></div>
          <div class="calc-row-actions">
            <button class="btn-ghost" id="cc-add-row" type="button">+ Add cable</button>
          </div>
          <div id="cc-result" class="calc-result"></div>
        </div>
      `;
      container.innerHTML = html;

      const rowsEl = container.querySelector('#cc-rows');
      const resEl  = container.querySelector('#cc-result');

      function renderRows() {
        rowsEl.innerHTML = cables.map((c, i) => `
          <div class="calc-row" data-row-idx="${i}">
            <input type="text" class="calc-row-label" placeholder="Label (optional)" value="${escapeHtml(c.label || '')}" />
            <div class="calc-row-num">
              <input type="number" class="calc-row-d" min="0" step="0.01" placeholder="Ø mm" value="${c.d ?? ''}" />
              <span class="calc-row-unit">mm</span>
            </div>
            <button class="calc-row-rm" type="button" title="Remove" aria-label="Remove">×</button>
          </div>
        `).join('');

        rowsEl.querySelectorAll('.calc-row').forEach(row => {
          const idx = Number(row.dataset.rowIdx);
          row.querySelector('.calc-row-label').addEventListener('input', e => { cables[idx].label = e.target.value; });
          row.querySelector('.calc-row-d').addEventListener('input', e => {
            cables[idx].d = e.target.value === '' ? null : Number(e.target.value);
            recompute();
          });
          row.querySelector('.calc-row-rm').addEventListener('click', () => {
            cables.splice(idx, 1);
            renderRows();
            recompute();
          });
        });
      }

      function fmt(n, dec = 2) { return Number.isFinite(n) ? n.toFixed(dec) : '—'; }

      function recompute() {
        const r = computeConduitFromCables(cables.map(c => Number(c.d)));
        if (!r) {
          resEl.innerHTML = `<div class="calc-result-empty">Enter at least one valid diameter.</div>`;
          return;
        }
        const fillAt = (id) => (r.sumArea / (Math.PI * (id/2) * (id/2))) * 100;

        resEl.innerHTML = `
          <div class="calc-result-grid">
            <div class="calc-stat">
              <span class="calc-stat-lbl">Total cable area</span>
              <strong>${fmt(r.sumArea, 1)} mm²</strong>
            </div>
            <div class="calc-stat">
              <span class="calc-stat-lbl">Geometric min. ID</span>
              <strong>${fmt(r.geomMin)} mm</strong>
              <span class="calc-stat-sub">cables physically can't fit below this</span>
            </div>
            <div class="calc-stat">
              <span class="calc-stat-lbl">Tight fill (55%) ID</span>
              <strong>${fmt(r.idTight)} mm</strong>
              <span class="calc-stat-sub">"don't waste space" scenario</span>
            </div>
            <div class="calc-stat">
              <span class="calc-stat-lbl">Standard (40%) ID</span>
              <strong>${fmt(r.idStd)} mm</strong>
              <span class="calc-stat-sub">NEC recommended upper limit</span>
            </div>
            <div class="calc-stat">
              <span class="calc-stat-lbl">Comfort (30%) ID</span>
              <strong>${fmt(r.idComfort)} mm</strong>
              <span class="calc-stat-sub">long / bendy runs</span>
            </div>
          </div>

          <h4 class="calc-subtitle">Recommended nominal conduit size</h4>
          <table class="calc-table">
            <thead><tr><th>Scenario</th><th>Min ID</th><th>Recommended</th><th>Fill @ ID</th></tr></thead>
            <tbody>
              <tr>
                <td>Tight (little slack)</td>
                <td>${fmt(r.idTight)} mm</td>
                <td><strong>${r.hoseTight.name}</strong> (ID ~${r.hoseTight.id} mm)</td>
                <td>${fmt(fillAt(r.hoseTight.id), 0)} %</td>
              </tr>
              <tr>
                <td>Standard</td>
                <td>${fmt(r.idStd)} mm</td>
                <td><strong>${r.hoseStd.name}</strong> (ID ~${r.hoseStd.id} mm)</td>
                <td>${fmt(fillAt(r.hoseStd.id), 0)} %</td>
              </tr>
              <tr>
                <td>Comfort</td>
                <td>${fmt(r.idComfort)} mm</td>
                <td><strong>${r.hoseComfort.name}</strong> (ID ~${r.hoseComfort.id} mm)</td>
                <td>${fmt(fillAt(r.hoseComfort.id), 0)} %</td>
              </tr>
            </tbody>
          </table>
          <p class="calc-foot">Note: actual ID for an AD size can vary ±0.5 mm by manufacturer; verify the ID printed on the product label before buying.</p>
        `;
      }

      container.querySelector('#cc-add-row').addEventListener('click', () => {
        cables.push({ label: '', d: null });
        renderRows();
      });

      renderRows();
      recompute();
    },
  },
];

let currentCalcId = null;

function _calcModalEls() {
  return {
    body:  document.getElementById('modal-calc-body'),
    title: document.getElementById('modal-calc-title'),
    back:  document.getElementById('calc-back-btn'),
  };
}

function renderToolsList() {
  const { body, title, back } = _calcModalEls();
  if (!body) return;
  currentCalcId = null;
  if (title) title.textContent = t('tools.title') || 'Hesaplar';
  if (back)  back.style.visibility = 'hidden';

  body.innerHTML = `
    <div class="tool-card-list">
      ${CALCULATORS.map(c => `
        <button class="tool-card" data-calc-id="${c.id}" type="button">
          <span class="tool-card-icon">${c.icon || ''}</span>
          <span class="tool-card-body">
            <span class="tool-card-title">${escapeHtml(c.title)}</span>
            <span class="tool-card-sub">${escapeHtml(c.subtitle || '')}</span>
          </span>
          <span class="tool-card-arrow">›</span>
        </button>
      `).join('')}
    </div>
  `;

  body.querySelectorAll('.tool-card').forEach(b => {
    b.addEventListener('click', () => openCalculator(b.dataset.calcId));
  });
}

function openCalculator(id) {
  const c = CALCULATORS.find(x => x.id === id);
  if (!c) return;
  const { body, title, back } = _calcModalEls();
  if (!body) return;
  currentCalcId = id;
  if (title) title.textContent = c.title;
  if (back)  back.style.visibility = 'visible';
  body.innerHTML = '';
  c.render(body);
}

function openCalculatorsModal() {
  if (typeof openModal === 'function') openModal('modal-calc');
  renderToolsList();
}

document.getElementById('calc-fab')?.addEventListener('click', openCalculatorsModal);
document.getElementById('calc-back-btn')?.addEventListener('click', () => renderToolsList());

// ── REVIEWS (weekly + monthly summaries) ────────────────
// Two parallel maps: state.reviews.week['2026-W19'], state.reviews.month['2026-05'].
// Notes are plain text; the editor autosaves on input (debounced).

function ensureReviewsState() {
  if (!state.reviews || typeof state.reviews !== 'object') state.reviews = { week: {}, month: {} };
  if (!state.reviews.week)  state.reviews.week  = {};
  if (!state.reviews.month) state.reviews.month = {};
}

// ISO 8601 week number — Monday-based, week 1 contains Jan 4th.
function isoWeek(d) {
  const t = new Date(d);
  t.setHours(0, 0, 0, 0);
  t.setDate(t.getDate() + 3 - ((t.getDay() + 6) % 7));
  const week1 = new Date(t.getFullYear(), 0, 4);
  return {
    year: t.getFullYear(),
    week: 1 + Math.round(((t - week1) / 86400000 - 3 + ((week1.getDay() + 6) % 7)) / 7),
  };
}

function reviewWeekKey(d = new Date())  { const w = isoWeek(d); return `${w.year}-W${String(w.week).padStart(2, '0')}`; }
function reviewMonthKey(d = new Date()) { const x = new Date(d); return `${x.getFullYear()}-${String(x.getMonth() + 1).padStart(2, '0')}`; }

// Convert a key back to a Date pointing to the start of that period
function reviewKeyToStart(key) {
  if (/^\d{4}-W\d{2}$/.test(key)) {
    const [y, w] = key.split('-W').map(Number);
    // ISO week 1: contains Jan 4th. Start = Monday of that week.
    const jan4 = new Date(y, 0, 4);
    const jan4Day = (jan4.getDay() + 6) % 7; // 0 = Mon
    const week1Mon = new Date(y, 0, 4 - jan4Day);
    const start = new Date(week1Mon);
    start.setDate(week1Mon.getDate() + (w - 1) * 7);
    return start;
  }
  if (/^\d{4}-\d{2}$/.test(key)) {
    const [y, m] = key.split('-').map(Number);
    return new Date(y, m - 1, 1);
  }
  return null;
}

function formatReviewLabel(period, key) {
  const start = reviewKeyToStart(key);
  if (!start) return key;
  const months = currentLang === 'tr'
    ? ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara']
    : ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  if (period === 'week') {
    const end = new Date(start); end.setDate(start.getDate() + 6);
    const sameMonth = start.getMonth() === end.getMonth();
    const w = key.slice(-2);
    if (sameMonth) {
      return `${t('reviews.week_label') || 'Hafta'} ${w} · ${start.getDate()}–${end.getDate()} ${months[start.getMonth()]}`;
    }
    return `${t('reviews.week_label') || 'Hafta'} ${w} · ${start.getDate()} ${months[start.getMonth()]} – ${end.getDate()} ${months[end.getMonth()]}`;
  }
  // Month
  return `${months[start.getMonth()]} ${start.getFullYear()}`;
}

function renderReviews() {
  ensureReviewsState();
  const listEl   = document.getElementById('reviews-list');
  const taEl     = document.getElementById('rev-textarea');
  const labelEl  = document.getElementById('rev-period-label');
  const delBtn   = document.getElementById('rev-delete-btn');
  const curBtn   = document.getElementById('rev-current-btn');
  const savedLbl = document.getElementById('rev-saved-label');
  if (!listEl || !taEl) return;

  // Reflect period toggle state
  document.querySelectorAll('#reviews-period-toggle [data-rev-period]').forEach(b => {
    b.classList.toggle('active', b.dataset.revPeriod === reviewPeriod);
  });

  // "+ Bu hafta" / "+ Bu ay" button label
  if (curBtn) {
    const span = curBtn.querySelector('span');
    if (span) span.textContent = reviewPeriod === 'week'
      ? (t('reviews.current_week')  || '+ Bu hafta')
      : (t('reviews.current_month') || '+ Bu ay');
  }

  const map = state.reviews[reviewPeriod] || {};
  const keys = Object.keys(map).sort().reverse(); // newest first

  // Auto-select the most recent if nothing selected (or selected isn't in this period)
  if (!currentReviewKey || !(currentReviewKey in map)) {
    currentReviewKey = keys[0] || null;
  }

  if (!keys.length) {
    listEl.innerHTML = `<div class="reviews-empty">${escapeHtml(t('reviews.empty') || 'Henüz kayıt yok. Yukarıdaki butonla başlat.')}</div>`;
  } else {
    listEl.innerHTML = keys.map(k => {
      const isActive = k === currentReviewKey;
      const preview = (map[k] || '').replace(/\s+/g, ' ').slice(0, 60);
      return `
        <button class="rev-row ${isActive ? 'active' : ''}" data-rev-key="${escapeHtml(k)}" type="button">
          <span class="rev-row-label">${escapeHtml(formatReviewLabel(reviewPeriod, k))}</span>
          ${preview ? `<span class="rev-row-preview">${escapeHtml(preview)}</span>` : ''}
        </button>`;
    }).join('');
    listEl.querySelectorAll('.rev-row').forEach(b => {
      b.addEventListener('click', () => {
        currentReviewKey = b.dataset.revKey;
        renderReviews();
      });
    });
  }

  taEl.placeholder = t('reviews.placeholder') || '';
  if (currentReviewKey) {
    if (labelEl) labelEl.textContent = formatReviewLabel(reviewPeriod, currentReviewKey);
    taEl.value = map[currentReviewKey] || '';
    taEl.disabled = false;
    if (delBtn) delBtn.style.display = '';
  } else {
    if (labelEl) labelEl.textContent = t('reviews.no_entry') || 'Kayıt yok';
    taEl.value = '';
    taEl.disabled = true;
    if (delBtn) delBtn.style.display = 'none';
  }
  if (savedLbl) savedLbl.textContent = '';
}

let _revSaveTimer = null;
function scheduleReviewSave() {
  if (!currentReviewKey) return;
  clearTimeout(_revSaveTimer);
  const taEl = document.getElementById('rev-textarea');
  const savedLbl = document.getElementById('rev-saved-label');
  if (savedLbl) savedLbl.textContent = '…';
  _revSaveTimer = setTimeout(() => {
    ensureReviewsState();
    state.reviews[reviewPeriod][currentReviewKey] = taEl.value;
    save();
    if (savedLbl) {
      savedLbl.textContent = t('reviews.saved') || 'Kaydedildi';
      setTimeout(() => { if (savedLbl.textContent === (t('reviews.saved') || 'Kaydedildi')) savedLbl.textContent = ''; }, 1500);
    }
    // Refresh list preview
    const li = document.querySelector(`#reviews-list .rev-row.active .rev-row-preview`);
    if (li) li.textContent = (taEl.value || '').replace(/\s+/g, ' ').slice(0, 60);
  }, 350);
}

function startCurrentReviewPeriod() {
  ensureReviewsState();
  const key = reviewPeriod === 'week' ? reviewWeekKey() : reviewMonthKey();
  if (!(key in state.reviews[reviewPeriod])) {
    state.reviews[reviewPeriod][key] = '';
    save();
  }
  currentReviewKey = key;
  renderReviews();
  setTimeout(() => document.getElementById('rev-textarea')?.focus(), 60);
}

function deleteCurrentReview() {
  if (!currentReviewKey) return;
  if (!confirm(t('reviews.confirm_delete') || 'Bu özet silinsin mi?')) return;
  delete state.reviews[reviewPeriod][currentReviewKey];
  save();
  currentReviewKey = null;
  renderReviews();
}

document.querySelectorAll('#reviews-period-toggle [data-rev-period]').forEach(b => {
  b.addEventListener('click', () => {
    reviewPeriod = b.dataset.revPeriod;
    currentReviewKey = null;
    renderReviews();
  });
});
document.getElementById('rev-current-btn')?.addEventListener('click', startCurrentReviewPeriod);
document.getElementById('rev-delete-btn')?.addEventListener('click', deleteCurrentReview);
document.getElementById('rev-textarea')?.addEventListener('input', scheduleReviewSave);

// ── LINKS (saved URLs) ──────────────────────────────────
// Flat collection of bookmarks. Single global list shared across
// Spaces — the 'links' item type is a singleton view onto state.links.

function ensureLinksState() {
  if (!Array.isArray(state.links)) state.links = [];
}

function linkDomain(url) {
  try {
    const u = new URL(url);
    return u.hostname.replace(/^www\./, '');
  } catch { return ''; }
}

function renderLinks() {
  ensureLinksState();
  const listEl = document.getElementById('links-list');
  if (!listEl) return;
  const searchEl = document.getElementById('links-search');
  if (searchEl && !searchEl.placeholder) searchEl.placeholder = t('links.search_ph') || '';

  const q = (linksFilter || '').trim().toLowerCase();
  const filtered = state.links.filter(l => {
    if (!q) return true;
    return (l.title || '').toLowerCase().includes(q)
        || (l.url   || '').toLowerCase().includes(q)
        || (l.tag   || '').toLowerCase().includes(q)
        || (l.notes || '').toLowerCase().includes(q);
  }).sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));

  if (!filtered.length) {
    listEl.innerHTML = `<div class="links-empty">${escapeHtml(t(state.links.length ? 'links.no_match' : 'links.empty') || 'Henüz link yok.')}</div>`;
    return;
  }

  listEl.innerHTML = filtered.map(l => {
    const dom = linkDomain(l.url || '');
    const safeUrl   = escapeHtml(l.url || '#');
    const titleText = escapeHtml(l.title || dom || l.url || '(no title)');
    return `
      <div class="link-row" data-link-id="${l.id}">
        <a class="link-row-main" href="${safeUrl}" target="_blank" rel="noopener noreferrer">
          <span class="link-row-icon">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>
          </span>
          <span class="link-row-body">
            <span class="link-row-title">${titleText}</span>
            ${dom    ? `<span class="link-row-domain">${escapeHtml(dom)}</span>` : ''}
            ${l.tag  ? `<span class="link-row-tag">${escapeHtml(l.tag)}</span>` : ''}
            ${l.notes ? `<span class="link-row-notes">${escapeHtml(l.notes)}</span>` : ''}
          </span>
        </a>
        <button class="btn-sm" data-link-edit="${l.id}" type="button">${escapeHtml(t('btn.edit') || 'Edit')}</button>
      </div>`;
  }).join('');

  listEl.querySelectorAll('[data-link-edit]').forEach(b => {
    b.addEventListener('click', () => openLinkModal(state.links.find(x => x.id === b.dataset.linkEdit)));
  });
}

function openLinkModal(link) {
  ensureLinksState();
  editingLinkId = link ? link.id : null;
  document.getElementById('link-url').value   = link ? (link.url   || '') : '';
  document.getElementById('link-title').value = link ? (link.title || '') : '';
  document.getElementById('link-tag').value   = link ? (link.tag   || '') : '';
  document.getElementById('link-notes').value = link ? (link.notes || '') : '';
  const titleEl = document.getElementById('modal-link-title');
  if (titleEl) titleEl.textContent = link ? (t('links.modal_edit') || 'Edit Link') : (t('links.modal_add') || 'Add Link');
  const delBtn = document.getElementById('link-delete-btn');
  if (delBtn) delBtn.style.display = link ? '' : 'none';
  if (typeof openModal === 'function') openModal('modal-link');
  setTimeout(() => document.getElementById('link-url').focus(), 60);
}

document.getElementById('add-link-btn')?.addEventListener('click', () => openLinkModal(null));

document.getElementById('save-link')?.addEventListener('click', () => {
  ensureLinksState();
  const url = (document.getElementById('link-url').value || '').trim();
  if (!url) {
    document.getElementById('link-url').focus();
    return;
  }
  // Auto-prefix scheme if missing
  const finalUrl = /^https?:\/\//i.test(url) ? url : `https://${url}`;
  const payload = {
    url:   finalUrl,
    title: (document.getElementById('link-title').value || '').trim(),
    tag:   (document.getElementById('link-tag').value   || '').trim(),
    notes: (document.getElementById('link-notes').value || '').trim(),
  };
  if (editingLinkId) {
    const l = state.links.find(x => x.id === editingLinkId);
    if (l) Object.assign(l, payload);
  } else {
    state.links.push({ id: uid(), ...payload, createdAt: Date.now() });
  }
  save();
  renderLinks();
  closeModal('modal-link');
});

document.getElementById('link-delete-btn')?.addEventListener('click', () => {
  if (!editingLinkId) return;
  if (!confirm(t('links.confirm_delete') || 'Bu link silinsin mi?')) return;
  state.links = state.links.filter(l => l.id !== editingLinkId);
  save();
  renderLinks();
  closeModal('modal-link');
});

document.getElementById('links-search')?.addEventListener('input', e => {
  linksFilter = e.target.value;
  renderLinks();
});

function getMode() { return state.mode || 'job'; }
function applyModeAttr() {
  document.body.setAttribute('data-mode', getMode());
}
function setMode(m) {
  state.mode = m;
  save();
  applyModeAttr();
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === m);
  });
  // Reset selection that may now be invisible after filtering
  state.currentRobotId   = null;
  state.currentMeetingId = null;

  // If active tab isn't visible in this mode, redirect to projects/lists
  const activeTab = document.querySelector('.tab.active');
  if (activeTab) {
    const allowed = activeTab.dataset.modes;
    if (allowed && allowed !== m) {
      const fallback = document.querySelector('.tab[data-tab="robots"]');
      if (fallback) fallback.click();
    }
  }

  // In daily mode, "Tasks" tab uses 'today' filter by default
  allTasksFilter = m === 'daily' ? 'today' : 'open';
  document.querySelectorAll('#at-filter .at-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === allTasksFilter);
  });

  renderAll();
}
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => setMode(btn.dataset.mode));
});

// Filter helpers (default missing mode → 'job' for backwards compat)
// v4: Spaces replace Job/Daily mode. Filters stay as no-ops so cross-space
// views (All Tasks, Calendar) include everything.
function inMode(_item) { return true; }
function projectsByMode()  { return state.robots      || []; }
function meetingsByMode()  { return state.meetings    || []; }

// ── PWA: register service worker ───────────────────────
// We deliberately do NOT auto-reload on SW activation. The earlier auto-reload
// logic raced with BackupManager.init(): on a fresh deploy the page kicked
// off silent Drive re-auth (one accounts.google.com flash), then the SW
// activation handler fired location.reload(), and the freshly-loaded page
// kicked off silent re-auth again (a second flash). The network-first SW
// already serves fresh app.js / index.html / style.css on every cold start,
// so a manual refresh is enough when the user does want the latest behavior.
if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// ── INIT ───────────────────────────────────────────────
load();
// Language switcher
document.querySelectorAll('.lang-btn').forEach(b => {
  b.addEventListener('click', () => setLang(b.dataset.lang));
  b.classList.toggle('active', b.dataset.lang === currentLang);
});
applyI18n();
// Apply mode initial state
(function() {
  const m = getMode();
  applyModeAttr();
  document.querySelectorAll('.mode-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.mode === m);
  });
  allTasksFilter = m === 'daily' ? 'today' : 'open';
  document.querySelectorAll('#at-filter .at-filter-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === allTasksFilter);
  });
})();

// ═════════════════════════════════════════════════════════
//  V4 — Spaces (ClickUp-inspired hierarchy)
//  Sidebar tree of user-defined Spaces. Each space holds typed items
//  (list / meeting / visit / journal) referencing the existing data
//  collections. Mode (Job/Daily) is removed; spaces replace it.
// ═════════════════════════════════════════════════════════

const ITEM_ICONS = {
  list:    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
  meeting: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  visit:   '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>',
  journal: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6M16 13H8M16 17H8M10 9H8"/></svg>',
  finance: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/><path d="M7 15h3"/></svg>',
  purchases: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>',
  review:    '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 6v6l4 2"/><circle cx="12" cy="12" r="9"/></svg>',
  links:     '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>',
};

function escapeHtml(s) {
  return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// Tiny markdown renderer for notebook entries. Plain-text is escaped first so
// the input is never trusted; we only re-introduce a small whitelist of
// inline tags (bold, italic, code, link). Lists and line breaks come last.
function renderMarkdown(s) {
  if (!s) return '';
  let h = escapeHtml(s);
  // Inline code first so its contents don't get re-processed
  h = h.replace(/`([^`\n]+)`/g, (_, t) => `<code>${t}</code>`);
  // Bold then italic — bold tested first to avoid stealing italic stars
  h = h.replace(/\*\*([^*\n]+)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/(^|[\s(_~])\*([^*\n]+)\*(?=[\s),.!?_~]|$)/g, '$1<em>$2</em>');
  // Bare URLs
  h = h.replace(/\bhttps?:\/\/[^\s<]+/g, m => `<a href="${m}" target="_blank" rel="noopener noreferrer">${m}</a>`);
  // Bullet list lines: "- item" or "* item" at start of a line
  const lines = h.split('\n');
  const buf = [];
  let inList = false;
  for (const line of lines) {
    const m = line.match(/^\s*[-*]\s+(.*)$/);
    if (m) {
      if (!inList) { buf.push('<ul class="md-list">'); inList = true; }
      buf.push(`<li>${m[1]}</li>`);
    } else {
      if (inList) { buf.push('</ul>'); inList = false; }
      buf.push(line);
    }
  }
  if (inList) buf.push('</ul>');
  h = buf.join('\n').replace(/\n/g, '<br>');
  // Collapse <br> immediately after </ul> to keep spacing tight
  h = h.replace(/<\/ul><br>/g, '</ul>');
  return h;
}

function escapeJsArg(s) {
  return String(s)
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/\r/g, '\\r')
    .replace(/\n/g, '\\n')
    .replace(/</g, '\\x3C')
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;');
}

// ── First-run seed: sample data so a new user has something to explore ──
function seedSampleData() {
  // Skip if user has already seen the welcome (they may have deleted samples on purpose)
  if (state.onboarded) return false;
  // Only seed when truly empty (no robots/meetings/visits anywhere). This also
  // catches users who briefly visited before seeding existed: state.spaces will
  // already have Work/Personal but the actual data collections are still empty.
  const empty = (!state.robots      || state.robots.length === 0)
             && (!state.meetings    || state.meetings.length === 0)
             && (!state.fieldVisits || state.fieldVisits.length === 0);
  if (!empty) return false;

  const work = (state.spaces || []).find(s => s.name === 'Work') || (state.spaces && state.spaces[0]);
  if (!work) return false;

  const today = new Date();
  const todayIso = today.toISOString().slice(0, 10);
  const inThreeDays = new Date(today.getTime() + 3 * 86400000).toISOString().slice(0, 10);
  const sampleListName = 'Welcome to B-Less';

  const sampleList = {
    id: uid(),
    name: sampleListName,
    description: 'A sample list to help you explore. Delete it whenever you want.',
    category: 'Getting Started',
    mode: 'job',
    tasks: [
      { id: uid(), title: 'Tap me, then mark Done', priority: 'normal',   status: 'active',  dueDate: todayIso,    tags: ['demo'],  notebook: [], expanded: false, createdAt: Date.now() },
      { id: uid(), title: 'Open me and add a subtask or a note', priority: 'high', status: 'active', dueDate: inThreeDays, tags: ['demo'], notebook: [], expanded: false, createdAt: Date.now() },
      { id: uid(), title: 'Create your own list with the + button', priority: 'normal', status: 'pending', dueDate: null, tags: [], notebook: [], expanded: false, createdAt: Date.now() },
    ],
    issues: [],
    createdAt: Date.now(),
  };
  state.robots = state.robots || [];
  state.robots.push(sampleList);
  work.items.push({ id: uid(), type: 'list', refId: sampleList.id });

  const sampleVisit = {
    id: uid(),
    location: 'Sample customer site',
    date: inThreeDays,
    robot: sampleListName,
    notes: 'Plan a visit, log who you meet and what to follow up on.',
    mode: 'job',
    createdAt: Date.now(),
  };
  state.fieldVisits = state.fieldVisits || [];
  state.fieldVisits.push(sampleVisit);
  work.items.push({ id: uid(), type: 'visit', refId: sampleVisit.id });

  const sampleMeeting = {
    id: uid(),
    title: 'Welcome meeting',
    date: todayIso,
    location: 'Office',
    attendees: 'You',
    robot: sampleListName,
    notes: 'Use this area to capture decisions and discussion. Action items below.',
    actions: [
      { id: uid(), text: 'Explore the spaces in the sidebar', done: false, createdAt: Date.now() },
      { id: uid(), text: 'Try the language toggle in Settings', done: false, createdAt: Date.now() },
    ],
    mode: 'job',
    createdAt: Date.now(),
  };
  state.meetings = state.meetings || [];
  state.meetings.push(sampleMeeting);
  work.items.push({ id: uid(), type: 'meeting', refId: sampleMeeting.id });

  save();
  return true;
}

// ── Owner gate: extra UI surfaces (calculators, tools) only show for the owner ──
// This is a *visibility* gate, not a security boundary — anyone with devtools
// could flip the flag. The data shown is non-sensitive, just personal/clutter
// hiding for other users who happen to sign in.
const OWNER_EMAIL = 'batuhandeveci.bd@gmail.com';
const OWNER_FLAG_KEY = 'b-less-owner';

function applyOwnerGate(email) {
  const isOwner = !!email && email.toLowerCase() === OWNER_EMAIL;
  if (isOwner) {
    document.body.dataset.owner = '1';
    try { localStorage.setItem(OWNER_FLAG_KEY, '1'); } catch {}
  } else if (email) {
    // Explicit non-match → revoke
    delete document.body.dataset.owner;
    try { localStorage.removeItem(OWNER_FLAG_KEY); } catch {}
  }
}

// On boot, restore from localStorage so owner UI shows immediately (before Drive
// silent re-auth completes). The Drive auth callback re-applies/revokes later.
(function restoreOwnerFlag() {
  try {
    if (localStorage.getItem(OWNER_FLAG_KEY) === '1') {
      document.body.dataset.owner = '1';
      return;
    }
    // Fallback: derive from cached Drive userinfo (set by fetchUserInfo on the
    // last successful sign-in). Lets the gate apply on the very first paint
    // after this code is deployed, without waiting for silent re-auth.
    const raw = localStorage.getItem('b-less-drive-user');
    if (raw) {
      const u = JSON.parse(raw);
      if (u && u.email && u.email.toLowerCase() === OWNER_EMAIL) {
        document.body.dataset.owner = '1';
        localStorage.setItem(OWNER_FLAG_KEY, '1');
      }
    }
  } catch {}
})();

// ── Easter egg: greet a specific Drive account with hearts ──
const BELOVED_EMAIL = 'irem.arayan@gmail.com';
const IREM_FLAG_KEY = 'b-less-irem-celebrated';
window.celebrateIfBeloved = function(email) {
  if (!email || email.toLowerCase() !== BELOVED_EMAIL) return;
  // Throttle to once per session: covers SW-triggered reloads and any silent
  // re-auth bursts that fire fetchUserInfo more than once back-to-back.
  let already = false;
  try { already = sessionStorage.getItem(IREM_FLAG_KEY) === '1'; } catch {}
  if (already || window.__bLessIremCelebrated) return;
  window.__bLessIremCelebrated = true;
  try { sessionStorage.setItem(IREM_FLAG_KEY, '1'); } catch {}
  showIremWelcome();
};

function showIremWelcome() {
  if (document.getElementById('irem-welcome')) return;

  const overlay = document.createElement('div');
  overlay.id = 'irem-welcome';
  overlay.className = 'irem-welcome-overlay';

  const heartsLayer = document.createElement('div');
  heartsLayer.className = 'irem-hearts';
  const HEARTS = ['💖','💗','💓','💕','💞','❤️','💝','🌸','💘'];
  const HEART_COUNT = 36;
  for (let i = 0; i < HEART_COUNT; i++) {
    const h = document.createElement('span');
    h.className = 'irem-heart';
    h.textContent = HEARTS[Math.floor(Math.random() * HEARTS.length)];
    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (18 + Math.random() * 36) + 'px';
    h.style.animationDuration = (4 + Math.random() * 4) + 's';
    h.style.animationDelay = (Math.random() * 2) + 's';
    heartsLayer.appendChild(h);
  }

  const card = document.createElement('div');
  card.className = 'irem-welcome-card';
  card.innerHTML = `
    <div class="irem-welcome-emoji">💖🐟💖</div>
    <div class="irem-welcome-title">hoşgeldin balıkımmmmmmmmm</div>
    <div class="irem-welcome-sub">seni çok seviyorum 💕</div>
    <button class="irem-welcome-close" type="button">teşekkürler 💗</button>
  `;

  overlay.appendChild(heartsLayer);
  overlay.appendChild(card);
  document.body.appendChild(overlay);

  const dismiss = () => {
    overlay.classList.add('closing');
    setTimeout(() => overlay.remove(), 350);
  };
  card.querySelector('.irem-welcome-close').addEventListener('click', dismiss);
  overlay.addEventListener('click', e => { if (e.target === overlay) dismiss(); });
  // Auto-dismiss after a comfortable read
  setTimeout(dismiss, 8000);
}

// ── Quick-capture FAB ──────────────────────────────────
const QUICK_LAST_LIST_KEY = 'b-less-quick-last-list';

function openQuickCapture() {
  const modal  = document.getElementById('modal-quick');
  const input  = document.getElementById('quick-input');
  const select = document.getElementById('quick-list-select');
  const dueInput = document.getElementById('quick-due-input');
  if (!modal || !input || !select) return;

  populateQuickListSelect();

  if (dueInput) dueInput.value = new Date().toISOString().slice(0, 10);
  input.value = '';
  modal.classList.add('open');
  setTimeout(() => input.focus(), 50);
}

function populateQuickListSelect() {
  const select = document.getElementById('quick-list-select');
  if (!select) return;
  const lists = (state.robots || []).slice().sort((a, b) => (a.name || '').localeCompare(b.name || ''));
  let lastUsed = null;
  try { lastUsed = localStorage.getItem(QUICK_LAST_LIST_KEY); } catch {}
  const preferred = state.currentRobotId || lastUsed || (lists[0] && lists[0].id);
  if (!lists.length) {
    select.innerHTML = '<option value="">(no lists yet — create one)</option>';
  } else {
    select.innerHTML = lists.map(r => `<option value="${escapeAttr(r.id)}" ${r.id === preferred ? 'selected' : ''}>${escapeHtml(r.name)}</option>`).join('');
  }
}

function quickCreateList() {
  const name = (prompt('New list name:') || '').trim();
  if (!name) return;
  // Pick a target space: use current, or fall back to first
  const targetSpace = (state.spaces || []).find(s => s.id === state.currentSpaceId) || (state.spaces || [])[0];
  if (!targetSpace) return;
  const robot = { id: uid(), name, description: '', category: '', mode: 'job', tasks: [], issues: [], createdAt: Date.now() };
  state.robots.push(robot);
  targetSpace.items.push({ id: uid(), type: 'list', refId: robot.id });
  save();
  populateQuickListSelect();
  const select = document.getElementById('quick-list-select');
  if (select) select.value = robot.id;
  // Sidebar/list views need to pick up the new list
  if (typeof renderSidebar === 'function') renderSidebar();
  if (typeof renderRobotList === 'function') renderRobotList();
}

function setQuickDateShortcut(kind) {
  const dueInput = document.getElementById('quick-due-input');
  if (!dueInput) return;
  if (kind === 'clear') { dueInput.value = ''; return; }
  const d = new Date();
  if (kind === 'tomorrow') d.setDate(d.getDate() + 1);
  dueInput.value = d.toISOString().slice(0, 10);
}

function closeQuickCapture() {
  document.getElementById('modal-quick')?.classList.remove('open');
}

function saveQuickTask() {
  const input  = document.getElementById('quick-input');
  const select = document.getElementById('quick-list-select');
  const dueInput = document.getElementById('quick-due-input');
  const title = (input?.value || '').trim();
  const listId = select?.value;
  if (!title || !listId) { input?.focus(); return; }
  const robot = (state.robots || []).find(r => r.id === listId);
  if (!robot) return;
  if (!robot.tasks) robot.tasks = [];
  const dueDate = (dueInput && dueInput.value) ? dueInput.value : null;
  robot.tasks.push({
    id: uid(), title, priority: 'normal', status: 'active',
    dueDate, tags: [], notebook: [], expanded: false, createdAt: Date.now(),
  });
  try { localStorage.setItem(QUICK_LAST_LIST_KEY, listId); } catch {}
  save();
  closeQuickCapture();
  if (typeof renderAllTasks === 'function') renderAllTasks();
  if (typeof renderRobotList === 'function') renderRobotList();
  if (typeof renderRobotDetail === 'function') renderRobotDetail();
}

(function wireQuick() {
  const wire = () => {
    const fab = document.getElementById('quick-fab');
    const overlay = document.getElementById('modal-quick');
    const saveBtn = document.getElementById('quick-save');
    const input = document.getElementById('quick-input');
    const newListBtn = document.getElementById('quick-new-list-btn');
    if (fab && !fab.dataset.bound) {
      fab.dataset.bound = '1';
      fab.addEventListener('click', openQuickCapture);
    }
    if (overlay && !overlay.dataset.bound) {
      overlay.dataset.bound = '1';
      overlay.addEventListener('click', e => { if (e.target === overlay) closeQuickCapture(); });
      overlay.querySelectorAll('[data-close="modal-quick"]').forEach(b => b.addEventListener('click', closeQuickCapture));
      overlay.querySelectorAll('[data-quick-date]').forEach(b => b.addEventListener('click', () => setQuickDateShortcut(b.dataset.quickDate)));
    }
    if (saveBtn && !saveBtn.dataset.bound) { saveBtn.dataset.bound = '1'; saveBtn.addEventListener('click', saveQuickTask); }
    if (newListBtn && !newListBtn.dataset.bound) { newListBtn.dataset.bound = '1'; newListBtn.addEventListener('click', quickCreateList); }
    if (input && !input.dataset.bound) {
      input.dataset.bound = '1';
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter')  { e.preventDefault(); saveQuickTask(); }
        if (e.key === 'Escape') closeQuickCapture();
      });
    }
  };
  wire();
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', wire);
})();

// ── Morning brief ──────────────────────────────────────
// Show a small "today at a glance" card on the first app open of each day.
// Gated by a per-day flag in localStorage so it never re-appears on reloads
// or SW restarts within the same calendar day.
const BRIEF_KEY = 'b-less-brief-day';

function todaysAgenda() {
  const todayIso = new Date().toISOString().slice(0, 10);
  const tasks = [];
  (state.robots || []).forEach(r => {
    (r.tasks || []).forEach(task => {
      if (task.status === 'done' || !task.dueDate) return;
      const d = new Date(task.dueDate + 'T00:00:00');
      const today = new Date(); today.setHours(0,0,0,0);
      if (d <= today) tasks.push({ task, project: r });
    });
  });
  const meetings = (state.meetings || []).filter(m => m.date === todayIso);
  const visits   = (state.fieldVisits || []).filter(v => v.date === todayIso);
  return { tasks, meetings, visits, todayIso };
}

function maybeShowBrief() {
  let lastShown = null;
  try { lastShown = localStorage.getItem(BRIEF_KEY); } catch {}
  const todayIso = new Date().toISOString().slice(0, 10);
  if (lastShown === todayIso) return;
  // Don't show on a brand-new install where there's nothing to brief about.
  if ((state.robots || []).length === 0 && (state.meetings || []).length === 0 && (state.fieldVisits || []).length === 0) return;
  // Don't crowd a first-time user who's still on the welcome modal.
  if (!state.onboarded) return;

  const a = todaysAgenda();
  if (!a.tasks.length && !a.meetings.length && !a.visits.length) {
    // Even an empty agenda is worth confirming once — but stay minimal.
  }

  const modal = document.getElementById('modal-brief');
  const body  = document.getElementById('brief-body');
  const title = document.getElementById('brief-title');
  if (!modal || !body || !title) return;

  const hour = new Date().getHours();
  title.textContent = hour < 5 ? 'Late night ahead' : hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  const sections = [];
  if (a.tasks.length) {
    sections.push(`
      <div class="brief-section">
        <div class="brief-section-title">Tasks for today (${a.tasks.length})</div>
        <ul class="brief-list">${a.tasks.slice(0, 8).map(it =>
          `<li><span class="brief-dot ${it.task.status}"></span><span>${escapeHtml(it.task.title)}</span><span class="brief-meta">${escapeHtml(it.project.name)}</span></li>`
        ).join('')}${a.tasks.length > 8 ? `<li class="brief-more">+${a.tasks.length - 8} more</li>` : ''}</ul>
      </div>`);
  }
  if (a.meetings.length) {
    sections.push(`
      <div class="brief-section">
        <div class="brief-section-title">Meetings (${a.meetings.length})</div>
        <ul class="brief-list">${a.meetings.map(m =>
          `<li><span class="brief-dot meeting"></span><span>${escapeHtml(m.title || 'Meeting')}</span>${m.location ? `<span class="brief-meta">${escapeHtml(m.location)}</span>` : ''}</li>`
        ).join('')}</ul>
      </div>`);
  }
  if (a.visits.length) {
    sections.push(`
      <div class="brief-section">
        <div class="brief-section-title">Visits (${a.visits.length})</div>
        <ul class="brief-list">${a.visits.map(v =>
          `<li><span class="brief-dot visit"></span><span>${escapeHtml(v.location || 'Visit')}</span>${v.robot ? `<span class="brief-meta">${escapeHtml(v.robot)}</span>` : ''}</li>`
        ).join('')}</ul>
      </div>`);
  }
  if (!sections.length) {
    sections.push('<p class="brief-empty">Nothing scheduled for today. Have a calm day.</p>');
  }
  body.innerHTML = sections.join('');

  modal.classList.add('open');
  const dismiss = () => {
    modal.classList.remove('open');
    try { localStorage.setItem(BRIEF_KEY, todayIso); } catch {}
  };
  document.getElementById('brief-got-it')?.addEventListener('click', dismiss, { once: true });
  modal.querySelectorAll('[data-close="modal-brief"]').forEach(b => b.addEventListener('click', dismiss, { once: true }));
  modal.addEventListener('click', e => { if (e.target === modal) dismiss(); }, { once: true });
}

// ── Streak / weekly stats ──────────────────────────────
function computeStreakStats() {
  const allTasks = [];
  (state.robots || []).forEach(r => (r.tasks || []).forEach(t => allTasks.push(t)));
  const startOfDay = (d) => { const x = new Date(d); x.setHours(0,0,0,0); return x.getTime(); };
  const today = startOfDay(new Date());
  const dayMs = 86400000;

  // Bucket completions per day
  const perDay = new Map();
  allTasks.forEach(t => {
    if (t.status !== 'done' || !t.completedAt) return;
    const day = startOfDay(new Date(t.completedAt));
    perDay.set(day, (perDay.get(day) || 0) + 1);
  });

  // 7-day total
  let last7 = 0;
  for (let i = 0; i < 7; i++) last7 += (perDay.get(today - i * dayMs) || 0);

  // Streak: consecutive days ending today (or yesterday if nothing today yet)
  let streak = 0;
  let cursor = today;
  if (!perDay.get(cursor)) cursor -= dayMs; // give the user grace if they haven't checked anything off today
  while (perDay.get(cursor)) { streak++; cursor -= dayMs; }

  // Today + tomorrow due counts
  const overdueOrToday = allTasks.filter(t => {
    if (t.status === 'done' || !t.dueDate) return false;
    const d = startOfDay(new Date(t.dueDate + 'T00:00:00'));
    return d <= today;
  }).length;

  return { last7, streak, overdueOrToday };
}

function renderStreakWidget() {
  const el = document.getElementById('streak-widget');
  if (!el) return;
  const s = computeStreakStats();
  // Hide entirely until there's something to show — avoids visual noise on a
  // brand-new install.
  if (s.last7 === 0 && s.streak === 0 && s.overdueOrToday === 0) {
    el.innerHTML = '';
    el.style.display = 'none';
    return;
  }
  el.style.display = '';
  el.innerHTML = `
    <div class="streak-stat">
      <span class="streak-num">${s.last7}</span>
      <span class="streak-lbl">done this week</span>
    </div>
    <div class="streak-stat">
      <span class="streak-num">${s.streak}</span>
      <span class="streak-lbl">day streak${s.streak ? ' 🔥' : ''}</span>
    </div>
    <div class="streak-stat">
      <span class="streak-num">${s.overdueOrToday}</span>
      <span class="streak-lbl">due now</span>
    </div>
  `;
}

// ── iCal export ────────────────────────────────────────
// Generate a single .ics file containing all upcoming + recent meetings and
// field visits. Meetings become VEVENTs with a 1-hour default duration;
// visits become full-day events. Spec-minimum fields only — most calendar
// apps (Google, Apple, Outlook) accept this.
function escapeIcs(s) {
  return String(s || '').replace(/\\/g, '\\\\').replace(/\r?\n/g, '\\n').replace(/,/g, '\\,').replace(/;/g, '\\;');
}
function icsDateAllDay(iso)  { return iso.replace(/-/g, ''); }                 // 20260415
function icsDateTime(iso, hh = '09', mm = '00') {                              // 20260415T090000
  return iso.replace(/-/g, '') + 'T' + hh + mm + '00';
}
function buildIcs() {
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//B-Less Planner//EN',
    'CALSCALE:GREGORIAN',
  ];
  const now = new Date();
  const stamp = now.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, 'Z');

  (state.meetings || []).forEach(m => {
    if (!m.date) return;
    const startIso = icsDateTime(m.date, '09', '00');
    // +1h
    const d = new Date(m.date + 'T09:00:00');
    d.setHours(d.getHours() + 1);
    const endIso = d.toISOString().replace(/[-:]/g, '').replace(/\.\d+Z$/, '').replace(/T(\d{6}).*$/, 'T$1');
    lines.push('BEGIN:VEVENT');
    lines.push('UID:meeting-' + m.id + '@b-less');
    lines.push('DTSTAMP:' + stamp);
    lines.push('DTSTART:' + startIso);
    lines.push('DTEND:'   + endIso);
    lines.push('SUMMARY:' + escapeIcs(m.title || 'Meeting'));
    if (m.location)  lines.push('LOCATION:'    + escapeIcs(m.location));
    const desc = [m.attendees && ('Attendees: ' + m.attendees), m.robot && ('Project: ' + m.robot), m.notes].filter(Boolean).join('\n');
    if (desc)        lines.push('DESCRIPTION:' + escapeIcs(desc));
    lines.push('END:VEVENT');
  });

  (state.fieldVisits || []).forEach(v => {
    if (!v.date) return;
    const start = icsDateAllDay(v.date);
    const endDate = new Date(v.date + 'T00:00:00');
    endDate.setDate(endDate.getDate() + 1);
    const endIso = endDate.toISOString().slice(0, 10).replace(/-/g, '');
    lines.push('BEGIN:VEVENT');
    lines.push('UID:visit-' + v.id + '@b-less');
    lines.push('DTSTAMP:' + stamp);
    lines.push('DTSTART;VALUE=DATE:' + start);
    lines.push('DTEND;VALUE=DATE:'   + endIso);
    lines.push('SUMMARY:' + escapeIcs('Visit: ' + (v.location || '')));
    if (v.location) lines.push('LOCATION:'    + escapeIcs(v.location));
    const desc = [v.robot && ('Project: ' + v.robot), v.notes].filter(Boolean).join('\n');
    if (desc)        lines.push('DESCRIPTION:' + escapeIcs(desc));
    lines.push('END:VEVENT');
  });

  lines.push('END:VCALENDAR');
  // RFC 5545 requires CRLF line endings
  return lines.join('\r\n');
}
function downloadIcs() {
  const ics = buildIcs();
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'b-less-calendar.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

// ── Global search ─────────────────────────────────────
const SEARCH_LIMIT = 40;

function searchAll(rawQuery) {
  const q = String(rawQuery || '').trim().toLowerCase();
  if (!q) return [];
  const tokens = q.split(/\s+/).filter(Boolean);
  const matches = (text) => {
    if (!text) return false;
    const t = String(text).toLowerCase();
    return tokens.every(tk => t.includes(tk));
  };
  // Score: lower = better. Title-hit beats body-hit.
  const score = (titleHit, bodyHit) => titleHit ? 0 : (bodyHit ? 1 : 9);
  const out = [];

  // Build a map: refId → { spaceId, itemId } so we can navigate
  const refIndex = {};
  (state.spaces || []).forEach(sp => {
    (sp.items || []).forEach(it => {
      refIndex[it.type + ':' + it.refId] = { spaceId: sp.id, itemId: it.id };
    });
  });

  // Lists (a.k.a. robots)
  (state.robots || []).forEach(r => {
    const ref = refIndex['list:' + r.id];
    const titleHit = matches(r.name);
    const bodyHit  = matches(r.description) || matches(r.category);
    if (titleHit || bodyHit) {
      out.push({ kind: 'list', s: score(titleHit, bodyHit), title: r.name, sub: r.category || r.description || 'List', ref, refId: r.id });
    }
    // Tasks within this list
    (r.tasks || []).forEach(task => {
      const tHit = matches(task.title);
      const tagHit = (task.tags || []).some(matches);
      const noteHit = (task.notebook || []).some(n => matches(n.text));
      const subHit = (task.subtasks || []).some(s => matches(s.title));
      if (tHit || tagHit || noteHit || subHit) {
        out.push({
          kind: 'task',
          s: score(tHit, tagHit || noteHit || subHit),
          title: task.title,
          sub: r.name + (task.dueDate ? ' · ' + task.dueDate : ''),
          ref, refId: r.id, taskId: task.id,
        });
      }
    });
    // Issues within this list
    (r.issues || []).forEach(issue => {
      const iHit = matches(issue.title);
      const noteHit = (issue.notebook || []).some(n => matches(n.text));
      if (iHit || noteHit) {
        out.push({ kind: 'issue', s: score(iHit, noteHit), title: issue.title, sub: r.name + ' · Issue', ref, refId: r.id, issueId: issue.id });
      }
    });
  });

  // Visits
  (state.fieldVisits || []).forEach(v => {
    const titleHit = matches(v.location);
    const bodyHit  = matches(v.robot) || matches(v.notes);
    if (titleHit || bodyHit) {
      const ref = refIndex['visit:' + v.id];
      out.push({ kind: 'visit', s: score(titleHit, bodyHit), title: v.location || 'Visit', sub: (v.date ? v.date + ' · ' : '') + (v.robot || ''), ref, refId: v.id });
    }
  });

  // Meetings
  (state.meetings || []).forEach(m => {
    const titleHit = matches(m.title);
    const bodyHit  = matches(m.location) || matches(m.attendees) || matches(m.robot) || matches(m.notes) || (m.actions || []).some(a => matches(a.text));
    if (titleHit || bodyHit) {
      const ref = refIndex['meeting:' + m.id];
      out.push({ kind: 'meeting', s: score(titleHit, bodyHit), title: m.title || 'Meeting', sub: (m.date ? m.date + ' · ' : '') + (m.location || ''), ref, refId: m.id });
    }
  });

  out.sort((a, b) => a.s - b.s || a.title.localeCompare(b.title));
  return out.slice(0, SEARCH_LIMIT);
}

const SEARCH_KIND_LABEL = {
  list: 'List', task: 'Task', issue: 'Issue', visit: 'Visit', meeting: 'Meeting',
};

function renderSearchResults(query) {
  const list = document.getElementById('search-results');
  if (!list) return;
  const items = searchAll(query);
  if (!query) {
    list.innerHTML = '<div class="search-empty">Type to search across tasks, lists, meetings and visits.</div>';
    return;
  }
  if (!items.length) {
    list.innerHTML = `<div class="search-empty">No matches for "${escapeHtml(query)}".</div>`;
    return;
  }
  list.innerHTML = items.map((it, i) => `
    <button class="search-result" data-idx="${i}" type="button">
      <span class="search-result-kind">${SEARCH_KIND_LABEL[it.kind]}</span>
      <span class="search-result-body">
        <span class="search-result-title">${escapeHtml(it.title || '')}</span>
        <span class="search-result-sub">${escapeHtml(it.sub || '')}</span>
      </span>
    </button>
  `).join('');
  list.querySelectorAll('.search-result').forEach((el, i) => {
    el.addEventListener('click', () => navigateToSearchResult(items[i]));
  });
}

function navigateToSearchResult(it) {
  closeSearchModal();
  if (!it) return;
  // Best-effort navigation: open the parent (list/meeting/visit) via the
  // existing space-item flow so all the right state and renderers fire.
  if (it.kind === 'task' || it.kind === 'issue' || it.kind === 'list') {
    if (it.ref) {
      selectSpaceItem(it.ref.spaceId, it.ref.itemId);
    } else {
      // Orphan: jump straight to the list
      state.currentRobotId = it.refId;
      activateSection('robots');
      renderRobotList(); renderRobotDetail();
    }
    if (it.kind === 'task') {
      // Expand the task so the user lands on it
      const robot = (state.robots || []).find(r => r.id === it.refId);
      const task  = robot && (robot.tasks || []).find(t => t.id === it.taskId);
      if (task) { task.expanded = true; renderRobotDetail(); }
    }
    if (it.kind === 'issue') {
      const robot = (state.robots || []).find(r => r.id === it.refId);
      const issue = robot && (robot.issues || []).find(x => x.id === it.issueId);
      if (issue) { issue.expanded = true; renderRobotDetail(); }
    }
  } else if (it.kind === 'meeting') {
    if (it.ref) selectSpaceItem(it.ref.spaceId, it.ref.itemId);
    else { state.currentMeetingId = it.refId; activateSection('meetings'); renderMeetingList(); renderMeetingDetail(); }
  } else if (it.kind === 'visit') {
    if (it.ref) selectSpaceItem(it.ref.spaceId, it.ref.itemId);
    else { activateSection('field-visits'); renderVisits(); }
  }
}

function openSearchModal() {
  const modal = document.getElementById('modal-search');
  const input = document.getElementById('search-input');
  if (!modal || !input) return;
  modal.classList.add('open');
  input.value = '';
  renderSearchResults('');
  // Focus after the open transition starts so iOS shows the keyboard.
  setTimeout(() => input.focus(), 50);
}

function closeSearchModal() {
  document.getElementById('modal-search')?.classList.remove('open');
}

(function wireSearch() {
  const wire = () => {
    const input = document.getElementById('search-input');
    const overlay = document.getElementById('modal-search');
    const trigger = document.getElementById('open-search-btn');
    if (input && !input.dataset.bound) {
      input.dataset.bound = '1';
      input.addEventListener('input', e => renderSearchResults(e.target.value));
      input.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearchModal(); });
    }
    if (overlay && !overlay.dataset.bound) {
      overlay.dataset.bound = '1';
      overlay.addEventListener('click', e => { if (e.target === overlay) closeSearchModal(); });
      overlay.querySelectorAll('[data-close="modal-search"]').forEach(b => b.addEventListener('click', closeSearchModal));
    }
    if (trigger && !trigger.dataset.bound) {
      trigger.dataset.bound = '1';
      trigger.addEventListener('click', () => { openSearchModal(); closeSpaceDrawer && closeSpaceDrawer(); });
    }
  };
  wire();
  // Also wire after init in case elements weren't in the DOM yet
  if (document.readyState !== 'complete') document.addEventListener('DOMContentLoaded', wire);
  document.addEventListener('keydown', e => {
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
      e.preventDefault();
      const isOpen = document.getElementById('modal-search')?.classList.contains('open');
      if (isOpen) closeSearchModal(); else openSearchModal();
    }
  });
})();

function maybeShowWelcome() {
  if (state.onboarded) return;
  const modal = document.getElementById('modal-welcome');
  if (!modal) return;
  modal.classList.add('open');
  const dismiss = () => {
    modal.classList.remove('open');
    state.onboarded = true;
    save();
  };
  document.getElementById('welcome-got-it')?.addEventListener('click', dismiss, { once: true });
  modal.querySelectorAll('[data-close="modal-welcome"]').forEach(b => b.addEventListener('click', dismiss, { once: true }));
  modal.addEventListener('click', e => { if (e.target === modal) dismiss(); }, { once: true });
}

// ── Migration: build state.spaces from legacy collections ──
// IDEMPOTENT: also catches "orphan" entities that exist in legacy collections
// but aren't referenced by any space (e.g. after restoring a pre-v4 backup).
function migrateToSpaces() {
  // First-time bootstrap: create Work + Personal
  const firstTime = !state.spaces || !Array.isArray(state.spaces) || state.spaces.length === 0;
  if (firstTime) {
    state.spaces = [
      { id: uid(), name: 'Work',     items: [] },
      { id: uid(), name: 'Personal', items: [] },
    ];
  }

  const work     = state.spaces.find(s => s.name === 'Work')     || state.spaces[0];
  const personal = state.spaces.find(s => s.name === 'Personal') || state.spaces[1] || work;

  // Ensure purchases collection exists (older saves may not have it)
  if (!Array.isArray(state.purchases)) state.purchases = [];
  // Ensure reviews exists
  if (!state.reviews || typeof state.reviews !== 'object') state.reviews = { week: {}, month: {} };
  if (!state.reviews.week)  state.reviews.week  = {};
  if (!state.reviews.month) state.reviews.month = {};
  // Ensure links collection
  if (!Array.isArray(state.links)) state.links = [];

  // Build a set of all currently-referenced refIds, by type
  const referenced = { list: new Set(), meeting: new Set(), visit: new Set(), journal: new Set(), finance: new Set(), purchases: new Set(), review: new Set(), links: new Set() };
  state.spaces.forEach(sp => {
    sp.items.forEach(it => { if (referenced[it.type]) referenced[it.type].add(it.refId); });
  });

  // Lists / projects: any robot not referenced anywhere → add to Work (or Personal if mode=daily)
  let added = false;
  (state.robots || []).forEach(r => {
    if (referenced.list.has(r.id)) return;
    const target = r.mode === 'daily' ? personal : work;
    target.items.push({ id: uid(), type: 'list', refId: r.id });
    added = true;
  });

  // Meetings — orphans → Work
  (state.meetings || []).forEach(m => {
    if (referenced.meeting.has(m.id)) return;
    work.items.push({ id: uid(), type: 'meeting', refId: m.id });
    added = true;
  });

  // Visits — orphans → Work
  (state.fieldVisits || []).forEach(v => {
    if (referenced.visit.has(v.id)) return;
    work.items.push({ id: uid(), type: 'visit', refId: v.id });
    added = true;
  });

  // Journal — single global instance; ensure at least one space has a slot
  const hasJournal = state.spaces.some(s => s.items.some(i => i.type === 'journal'));
  if (!hasJournal) {
    personal.items.push({ id: uid(), type: 'journal', refId: 'default' });
    added = true;
  }

  const hasFinance = state.spaces.some(s => s.items.some(i => i.type === 'finance'));
  if (!hasFinance) {
    personal.items.push({ id: uid(), type: 'finance', refId: 'default' });
    added = true;
  }

  // Drop dead refs (robot/meeting/visit deleted from legacy but still in space.items)
  const liveIds = {
    list:    new Set((state.robots      || []).map(r => r.id)),
    meeting: new Set((state.meetings    || []).map(m => m.id)),
    visit:   new Set((state.fieldVisits || []).map(v => v.id)),
    journal: new Set(['default']),
    finance: new Set(['default']),
    purchases: new Set(['default']),
    review: new Set(['default']),
    links: new Set(['default']),
  };
  let removed = false;
  state.spaces.forEach(sp => {
    const before = sp.items.length;
    sp.items = sp.items.filter(it => liveIds[it.type] && liveIds[it.type].has(it.refId));
    if (sp.items.length !== before) removed = true;
  });

  if (firstTime || added || removed) {
    if (!state.currentSpaceId) state.currentSpaceId = work.id;
    state.collapsedSpaces = state.collapsedSpaces || {};
    save();
  }
}

// ── Helpers ────────────────────────────────────────────
function findSpace(id) { return state.spaces.find(s => s.id === id); }
function findItem(spaceId, itemId) {
  const sp = findSpace(spaceId);
  return sp ? sp.items.find(i => i.id === itemId) : null;
}
function findItemAnywhere(itemId) {
  for (const sp of state.spaces) {
    const it = sp.items.find(i => i.id === itemId);
    if (it) return { space: sp, item: it };
  }
  return null;
}
// Find which space holds a list item referencing the given robot id
function findSpaceOfRobot(robotId) {
  for (const sp of state.spaces) {
    if (sp.items.some(i => i.type === 'list' && i.refId === robotId)) return sp;
  }
  return null;
}
// Populate the Space dropdown in modal-robot
function refreshSpaceSelect(selectedSpaceId) {
  const sel = document.getElementById('robot-space');
  if (!sel) return;
  sel.innerHTML = (state.spaces || []).map(sp =>
    `<option value="${sp.id}" ${sp.id === selectedSpaceId ? 'selected' : ''}>${escapeHtml(sp.name)}</option>`
  ).join('');
}
// Move a robot's list item between spaces (preserves item id so currentItemId stays valid)
function moveRobotToSpace(robotId, targetSpaceId) {
  const src = findSpaceOfRobot(robotId);
  const dst = findSpace(targetSpaceId);
  if (!src || !dst || src.id === dst.id) return;
  const it = src.items.find(i => i.type === 'list' && i.refId === robotId);
  if (!it) return;
  src.items = src.items.filter(i => i.id !== it.id);
  dst.items.push(it);
}
function resolveItemData(item) {
  if (!item) return null;
  if (item.type === 'list')    return (state.robots      || []).find(r => r.id === item.refId);
  if (item.type === 'meeting') return (state.meetings    || []).find(m => m.id === item.refId);
  if (item.type === 'visit')   return (state.fieldVisits || []).find(v => v.id === item.refId);
  if (item.type === 'journal') return { name: t('add_item.journal') || 'Journal' };
  if (item.type === 'finance') return { name: t('fin.title') || 'Expenses' };
  if (item.type === 'purchases') return { name: t('purchases.title') || 'Purchases' };
  if (item.type === 'review')    return { name: t('reviews.title') || 'Reviews' };
  if (item.type === 'links')     return { name: t('links.title') || 'Links' };
  return null;
}
function itemDisplayName(item) {
  const d = resolveItemData(item);
  if (!d) return '(missing)';
  return d.name || d.title || d.location || 'Untitled';
}

// ── Sidebar render ─────────────────────────────────────
function renderSidebar() {
  const list = document.getElementById('space-list');
  if (!list) return;

  if (!state.collapsedSpaces) state.collapsedSpaces = {};
  if (!state.collapsedGroups) state.collapsedGroups = {};

  function itemRow(it, spaceId) {
    const data = resolveItemData(it);
    if (!data) return '';
    const active = it.id === state.currentItemId ? 'active' : '';
    const name = escapeHtml(itemDisplayName(it));
    return `
      <div class="space-item ${active}" data-item-id="${it.id}" data-space-id="${spaceId}">
        <span class="space-item-icon">${ITEM_ICONS[it.type] || ''}</span>
        <span class="space-item-name">${name}</span>
      </div>`;
  }

  function subgroup(label, type, items, spaceId) {
    if (!items.length) return '';
    const key = spaceId + ':' + type;
    const collapsed = !!state.collapsedGroups[key];
    const rows = items.map(it => itemRow(it, spaceId)).join('');
    return `
      <div class="space-subgroup ${collapsed ? 'collapsed' : ''}" data-subgroup-key="${key}">
        <div class="space-subheader">
          <span class="space-subchev">${ICO.chevron}</span>
          <span class="space-item-icon space-subicon">${ITEM_ICONS[type] || ''}</span>
          <span class="space-subname">${escapeHtml(label)}</span>
          <span class="space-subcount">${items.length}</span>
          <button class="space-sub-add-btn" data-sub-add-type="${type}" data-sub-add-space="${spaceId}" title="${t('btn.add') || 'Add'} ${escapeHtml(label.toLowerCase())}" aria-label="${t('btn.add') || 'Add'}">+</button>
        </div>
        <div class="space-subitems">${rows}</div>
      </div>`;
  }

  function journalSubgroup(items, spaceId) {
    if (!items.length) return '';
    // Each entry in state.journal becomes a sub-item under a "Journal" group.
    // state.journalSpace[date] = spaceId pins an entry to one space; unpinned shows in all.
    const entries = state.journal || {};
    const pin = state.journalSpace || {};
    const dates = Object.keys(entries)
      .filter(d => entries[d] && entries[d].trim())
      .filter(d => !pin[d] || pin[d] === spaceId)
      .sort().reverse();
    const key = spaceId + ':journal';
    const collapsed = !!state.collapsedGroups[key];
    const fmt = d => {
      const dt = new Date(d + 'T00:00:00');
      const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return `${dt.getDate()} ${months[dt.getMonth()]} ${dt.getFullYear()}`;
    };
    const rows = dates.map(d => {
      const active = (state.currentJournalDate === d && document.getElementById('journal')?.classList.contains('active')) ? 'active' : '';
      return `
        <div class="space-item space-jrn-item ${active}" data-jrn-date="${d}" data-space-id="${spaceId}">
          <span class="space-item-icon">${ITEM_ICONS.journal}</span>
          <span class="space-item-name">${escapeHtml(fmt(d))}</span>
        </div>`;
    }).join('');
    const headerItemId = items[0].id;
    return `
      <div class="space-subgroup ${collapsed ? 'collapsed' : ''}" data-subgroup-key="${key}">
        <div class="space-subheader">
          <span class="space-subchev">${ICO.chevron}</span>
          <span class="space-item-icon space-subicon">${ITEM_ICONS.journal}</span>
          <span class="space-subname">${t('add_item.journal') || 'Journal'}</span>
          <span class="space-subcount">${dates.length}</span>
          <button class="space-jrn-today-btn" data-jrn-today="${spaceId}" data-jrn-item-id="${headerItemId}" title="${t('btn.today') || 'Today'}" aria-label="${t('btn.today') || 'Today'}">+</button>
        </div>
        <div class="space-subitems">${rows || `<div class="space-empty">${t('empty.no_journal') || 'No entries'}</div>`}</div>
      </div>`;
  }

  list.innerHTML = (state.spaces || []).map(sp => {
    const collapsed = !!state.collapsedSpaces[sp.id];
    const lists    = sp.items.filter(i => i.type === 'list');
    const meetings = sp.items.filter(i => i.type === 'meeting');
    const visits   = sp.items.filter(i => i.type === 'visit');
    const journals = sp.items.filter(i => i.type === 'journal');
    const finances = sp.items.filter(i => i.type === 'finance');
    const purchases = sp.items.filter(i => i.type === 'purchases');
    const reviews   = sp.items.filter(i => i.type === 'review');
    const links     = sp.items.filter(i => i.type === 'links');

    // Lists are flat (each is its own page). Meetings/Journal group up.
    // Visits are now global — accessible from the header cross-nav (not nested in spaces).
    const listsHtml    = lists.map(it => itemRow(it, sp.id)).join('');
    const meetingsHtml = subgroup(t('sidebar.meetings') || 'Meetings', 'meeting', meetings, sp.id);
    const journalsHtml = journalSubgroup(journals, sp.id);

    const financeHtml   = finances.map(it => itemRow(it, sp.id)).join('');
    const purchasesHtml = purchases.map(it => itemRow(it, sp.id)).join('');
    const reviewsHtml   = reviews.map(it => itemRow(it, sp.id)).join('');
    const linksHtml     = links.map(it => itemRow(it, sp.id)).join('');
    const body = listsHtml + financeHtml + purchasesHtml + reviewsHtml + linksHtml + meetingsHtml + journalsHtml;

    return `
      <div class="space-group ${collapsed ? 'collapsed' : ''}" data-space-id="${sp.id}">
        <div class="space-header">
          <span class="space-chev">${ICO.chevron}</span>
          <span class="space-name">${escapeHtml(sp.name)}</span>
          <button class="space-add-btn" data-add-to-space="${sp.id}" title="Add item" aria-label="Add item">+</button>
          <button class="space-more-btn" data-space-menu="${sp.id}" title="Space options" aria-label="Space options">⋯</button>
        </div>
        <div class="space-items">${body || '<div class="space-empty">No items</div>'}</div>
      </div>`;
  }).join('');

  // Item click (regular items)
  list.querySelectorAll('.space-item:not(.space-jrn-item)').forEach(el => {
    el.addEventListener('click', () => selectSpaceItem(el.dataset.spaceId, el.dataset.itemId));
  });

  // Drag-drop: items can be moved between Spaces
  list.querySelectorAll('.space-item:not(.space-jrn-item)').forEach(el => {
    el.draggable = true;
    el.addEventListener('dragstart', e => {
      e.dataTransfer.setData('text/karta-item', JSON.stringify({
        itemId: el.dataset.itemId,
        sourceSpaceId: el.dataset.spaceId,
      }));
      e.dataTransfer.effectAllowed = 'move';
      el.classList.add('dragging');
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
  });
  // Journal entries: draggable to pin a date to a specific space
  list.querySelectorAll('.space-jrn-item').forEach(el => {
    el.draggable = true;
    el.addEventListener('dragstart', e => {
      e.stopPropagation();
      e.dataTransfer.setData('text/karta-journal', JSON.stringify({
        date: el.dataset.jrnDate,
        sourceSpaceId: el.dataset.spaceId,
      }));
      e.dataTransfer.effectAllowed = 'move';
      el.classList.add('dragging');
    });
    el.addEventListener('dragend', () => el.classList.remove('dragging'));
  });
  list.querySelectorAll('.space-group').forEach(el => {
    el.addEventListener('dragover', e => {
      const types = Array.from(e.dataTransfer.types);
      if (!types.includes('text/karta-item') && !types.includes('text/karta-journal')) return;
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      el.classList.add('drag-target');
    });
    el.addEventListener('dragleave', e => {
      // Only clear when leaving the group entirely
      if (e.target === el) el.classList.remove('drag-target');
    });
    el.addEventListener('drop', e => {
      e.preventDefault();
      el.classList.remove('drag-target');
      const targetSpaceId = el.dataset.spaceId;
      // Journal entry drop → pin date to this space
      const jrnRaw = e.dataTransfer.getData('text/karta-journal');
      if (jrnRaw) {
        let j; try { j = JSON.parse(jrnRaw); } catch { return; }
        if (!j || !j.date) return;
        if (!state.journalSpace) state.journalSpace = {};
        if (j.sourceSpaceId === targetSpaceId) {
          // dropping back onto same space → unpin (show in all)
          delete state.journalSpace[j.date];
        } else {
          state.journalSpace[j.date] = targetSpaceId;
        }
        save();
        renderSidebar();
        return;
      }
      let data;
      try { data = JSON.parse(e.dataTransfer.getData('text/karta-item')); } catch { return; }
      if (!data || !data.itemId || data.sourceSpaceId === targetSpaceId) return;
      const src = findSpace(data.sourceSpaceId);
      const dst = findSpace(targetSpaceId);
      if (!src || !dst) return;
      const moving = src.items.find(i => i.id === data.itemId);
      if (!moving) return;
      src.items = src.items.filter(i => i.id !== data.itemId);
      dst.items.push(moving);
      state.currentSpaceId = targetSpaceId;
      save();
      renderSidebar();
    });
  });
  // Journal date entry click
  list.querySelectorAll('.space-jrn-item').forEach(el => {
    el.addEventListener('click', () => selectJournalDate(el.dataset.spaceId, el.dataset.jrnDate));
  });
  // Journal "+today" button
  list.querySelectorAll('.space-jrn-today-btn').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const today = (typeof ymd === 'function') ? ymd(new Date()) : new Date().toISOString().slice(0, 10);
      selectJournalDate(el.dataset.jrnToday, today);
    });
  });
  // Space header click → toggle collapse
  list.querySelectorAll('.space-header').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.space-add-btn') || e.target.closest('.space-more-btn')) return;
      const sid = el.parentElement.dataset.spaceId;
      state.collapsedSpaces[sid] = !state.collapsedSpaces[sid];
      save();
      renderSidebar();
    });
  });
  // Sub-group header click → toggle collapse for Meetings/Visits group
  list.querySelectorAll('.space-subheader').forEach(el => {
    el.addEventListener('click', e => {
      if (e.target.closest('.space-sub-add-btn') || e.target.closest('.space-jrn-today-btn')) return;
      const key = el.parentElement.dataset.subgroupKey;
      state.collapsedGroups[key] = !state.collapsedGroups[key];
      save();
      renderSidebar();
    });
  });
  // Sub-group "+" → open type-specific add modal targeted at this space
  list.querySelectorAll('.space-sub-add-btn').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      const type    = el.dataset.subAddType;
      const spaceId = el.dataset.subAddSpace;
      pendingItemAttach = { spaceId, type };
      if (type === 'meeting') {
        document.getElementById('add-meeting-btn')?.click();
      } else if (type === 'visit') {
        document.getElementById('add-visit-btn')?.click();
      }
    });
  });
  // Add item
  list.querySelectorAll('.space-add-btn').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      openAddItemPicker(el.dataset.addToSpace);
    });
  });
  // Space menu (rename/delete)
  list.querySelectorAll('.space-more-btn').forEach(el => {
    el.addEventListener('click', e => {
      e.stopPropagation();
      openSpaceMenu(el.dataset.spaceMenu);
    });
  });
}

// ── Click an item: navigate to the matching legacy section ──
function selectSpaceItem(spaceId, itemId) {
  const item = findItem(spaceId, itemId);
  if (!item) return;
  state.currentSpaceId = spaceId;
  state.currentItemId  = itemId;

  if (item.type === 'list') {
    state.currentRobotId = item.refId;
    activateSection('robots');
    if (typeof renderRobotList === 'function')   renderRobotList();
    if (typeof renderRobotDetail === 'function') renderRobotDetail();
  } else if (item.type === 'meeting') {
    state.currentMeetingId = item.refId;
    activateSection('meetings');
    if (typeof renderMeetingList === 'function')   renderMeetingList();
    if (typeof renderMeetingDetail === 'function') renderMeetingDetail();
  } else if (item.type === 'visit') {
    activateSection('field-visits');
    if (typeof renderVisits === 'function') renderVisits();
  } else if (item.type === 'journal') {
    activateSection('journal');
  } else if (item.type === 'finance') {
    activateSection('finance');
    renderFinance();
  } else if (item.type === 'purchases') {
    activateSection('purchases');
    if (typeof renderPurchases === 'function') renderPurchases();
  } else if (item.type === 'review') {
    activateSection('reviews');
    if (typeof renderReviews === 'function') renderReviews();
  } else if (item.type === 'links') {
    activateSection('links');
    if (typeof renderLinks === 'function') renderLinks();
  }

  save();
  renderSidebar();
  closeSpaceDrawer();
}

function selectJournalDate(spaceId, date) {
  state.currentSpaceId = spaceId;
  state.currentItemId = null;
  state.currentJournalDate = date;
  // Update existing jrnSelected used by initJournal/renderJournalList
  if (typeof jrnSelected !== 'undefined') jrnSelected = date;
  activateSection('journal');
  const dateInput = document.getElementById('jrn-date');
  const area      = document.getElementById('jrn-area');
  if (dateInput) dateInput.value = date;
  if (area)      area.value      = (state.journal || {})[date] || '';
  if (typeof renderJournalList === 'function') renderJournalList();
  save();
  renderSidebar();
  closeSpaceDrawer();
  setTimeout(() => area && area.focus(), 50);
}

function activateSection(id) {
  document.querySelectorAll('.section').forEach(s => s.classList.toggle('active', s.id === id));
  // Sync the (now-hidden) tab buttons so existing logic that reads activeSection works
  document.querySelectorAll('.tab').forEach(t => t.classList.toggle('active', t.dataset.tab === id));
  document.querySelectorAll('.settings-nav-btn').forEach(btn => btn.classList.toggle('active', id === 'more'));
  if (id === 'robots' || id === 'topics') activeSection = id;
}

// ── Add Item picker (Lists / Meetings / Visits / Journal) ──
function openAddItemPicker(spaceId) {
  const modal = document.getElementById('modal-add-item');
  if (!modal) return;
  modal.dataset.targetSpaceId = spaceId;
  modal.classList.add('open');
}

function closeAddItemPicker() {
  document.getElementById('modal-add-item')?.classList.remove('open');
}

function handleAddItemPick(type) {
  const modal = document.getElementById('modal-add-item');
  const spaceId = modal?.dataset.targetSpaceId;
  if (!spaceId) return;
  closeAddItemPicker();

  // Defer space-attach until the underlying entity is created. We listen for
  // the next save() and pick up newly added robot/meeting/visit ids.
  pendingItemAttach = { spaceId, type };

  if (type === 'list') {
    if (typeof openEntityModal === 'function') openEntityModal('robot');
  } else if (type === 'meeting') {
    document.getElementById('add-meeting-btn')?.click();
  } else if (type === 'visit') {
    document.getElementById('add-visit-btn')?.click();
  } else if (type === 'journal') {
    // Journal: single global instance; just attach a ref item if not already there
    const sp = findSpace(spaceId);
    if (sp && !sp.items.some(i => i.type === 'journal')) {
      sp.items.push({ id: uid(), type: 'journal', refId: 'default' });
      save();
      renderSidebar();
    }
    pendingItemAttach = null;
    selectSpaceItem(spaceId, sp.items.find(i => i.type === 'journal').id);
  } else if (type === 'finance') {
    const sp = findSpace(spaceId);
    if (sp && !sp.items.some(i => i.type === 'finance')) {
      sp.items.push({ id: uid(), type: 'finance', refId: 'default' });
      save();
      renderSidebar();
    }
    pendingItemAttach = null;
    selectSpaceItem(spaceId, sp.items.find(i => i.type === 'finance').id);
  } else if (type === 'purchases') {
    const sp = findSpace(spaceId);
    if (sp && !sp.items.some(i => i.type === 'purchases')) {
      sp.items.push({ id: uid(), type: 'purchases', refId: 'default' });
      save();
      renderSidebar();
    }
    pendingItemAttach = null;
    selectSpaceItem(spaceId, sp.items.find(i => i.type === 'purchases').id);
  } else if (type === 'review') {
    const sp = findSpace(spaceId);
    if (sp && !sp.items.some(i => i.type === 'review')) {
      sp.items.push({ id: uid(), type: 'review', refId: 'default' });
      save();
      renderSidebar();
    }
    pendingItemAttach = null;
    selectSpaceItem(spaceId, sp.items.find(i => i.type === 'review').id);
  } else if (type === 'links') {
    const sp = findSpace(spaceId);
    if (sp && !sp.items.some(i => i.type === 'links')) {
      sp.items.push({ id: uid(), type: 'links', refId: 'default' });
      save();
      renderSidebar();
    }
    pendingItemAttach = null;
    selectSpaceItem(spaceId, sp.items.find(i => i.type === 'links').id);
  }
}

let pendingItemAttach = null;

// Watch for saves; if a new robot/meeting/visit appeared, attach to pending space
const _origSave = save;
save = function() {
  _origSave.apply(this, arguments);
  if (!pendingItemAttach) return;
  const { spaceId, type } = pendingItemAttach;
  const sp = findSpace(spaceId);
  if (!sp) { pendingItemAttach = null; return; }
  let newRefId = null;
  if (type === 'list')    newRefId = state.currentRobotId;
  if (type === 'meeting') newRefId = state.currentMeetingId;
  if (type === 'visit')   {
    // Visits don't have a "current" id; pick the most recent
    const last = (state.fieldVisits || [])[state.fieldVisits.length - 1];
    newRefId = last && last.id;
  }
  if (newRefId && !sp.items.some(i => i.type === type && i.refId === newRefId)) {
    const newItem = { id: uid(), type, refId: newRefId };
    sp.items.push(newItem);
    state.currentItemId = newItem.id;
    state.currentSpaceId = spaceId;
    pendingItemAttach = null;
    _origSave();
    renderSidebar();
  }
};

// ── Add Space ──
function addSpace() {
  const name = prompt(t('space.name_prompt') || 'Space name:');
  if (!name || !name.trim()) return;
  const sp = { id: uid(), name: name.trim(), items: [] };
  state.spaces.push(sp);
  save();
  renderSidebar();
}

function openSpaceMenu(spaceId) {
  const sp = findSpace(spaceId);
  if (!sp) return;
  const choice = prompt('Space "' + sp.name + '"\n\n1: Rename\n2: Delete\n\nType 1 or 2:');
  if (choice === '1') {
    const next = prompt('New name:', sp.name);
    if (next && next.trim()) { sp.name = next.trim(); save(); renderSidebar(); }
  } else if (choice === '2') {
    if (state.spaces.length <= 1) { alert('Cannot delete the only space.'); return; }
    if (!confirm('Delete space "' + sp.name + '"? Items inside are unlinked but their underlying data is kept.')) return;
    state.spaces = state.spaces.filter(s => s.id !== spaceId);
    if (state.currentSpaceId === spaceId) state.currentSpaceId = state.spaces[0].id;
    save(); renderSidebar();
  }
}

// ── Cross-space top nav (Today / Calendar / All Tasks) ──
function showCrossView(name) {
  state.currentItemId = null;
  if (name === 'today') {
    activateSection('all-tasks');
    allTasksFilter = 'today';
    document.querySelectorAll('#at-filter .at-filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === 'today');
    });
    if (typeof renderAllTasks === 'function') renderAllTasks();
  } else if (name === 'calendar') {
    activateSection('calendar');
    if (typeof renderCalendar === 'function') renderCalendar();
  } else if (name === 'visits') {
    activateSection('field-visits');
    if (typeof renderVisits === 'function') renderVisits();
  } else if (name === 'all-tasks') {
    activateSection('all-tasks');
    allTasksFilter = 'open';
    document.querySelectorAll('#at-filter .at-filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.filter === 'open');
    });
    if (typeof renderAllTasks === 'function') renderAllTasks();
  }
  document.querySelectorAll('.cross-nav-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cross === name);
  });
  setBottomNavActive(name);
  closeSpaceDrawer();
  renderSidebar();
}
document.querySelectorAll('.cross-nav-btn').forEach(b => {
  b.addEventListener('click', () => showCrossView(b.dataset.cross));
});

// ── Init ──
migrateToSpaces();
seedSampleData(); // self-gates on state.onboarded + empty data
renderSidebar();
const _addSpaceBtn = document.getElementById('add-space-btn');
if (_addSpaceBtn) _addSpaceBtn.addEventListener('click', addSpace);
const _addItemModal = document.getElementById('modal-add-item');
if (_addItemModal) {
  _addItemModal.querySelectorAll('[data-add-type]').forEach(b => {
    b.addEventListener('click', () => handleAddItemPick(b.dataset.addType));
  });
  _addItemModal.querySelectorAll('[data-close="modal-add-item"]').forEach(b => {
    b.addEventListener('click', closeAddItemPicker);
  });
  _addItemModal.addEventListener('click', e => { if (e.target === _addItemModal) closeAddItemPicker(); });
}

// Re-render sidebar whenever data changes. Also re-run the (idempotent)
// migration so legacy entities restored from a backup get attached to a space.
const _origRenderAll = renderAll;
renderAll = function() {
  migrateToSpaces();
  _origRenderAll.apply(this, arguments);
  renderSidebar();
};

renderAll();
initJournal();
BackupManager.initUI();
BackupManager.init();
document.getElementById('export-ics-btn')?.addEventListener('click', downloadIcs);
document.getElementById('bnav-search-btn')?.addEventListener('click', () => openSearchModal());

// Home grid: pill button + the colorful card row each navigate somewhere.
function setBnavActiveFor(id) {
  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));
  if (id === 'home') document.getElementById('bnav-home-btn')?.classList.add('active');
  else if (id === 'inbox') document.getElementById('bnav-inbox-btn')?.classList.add('active');
  else if (id === 'all-tasks') document.getElementById('bnav-mytasks-btn')?.classList.add('active');
  else if (id === 'more') document.querySelector('.tab.bnav-btn[data-tab="more"]')?.classList.add('active');
}

// ── Home dashboard ─────────────────────────────────────
const HOME_SPACE_OPEN_KEY = 'b-less-home-spaces-open';
function loadHomeOpen() {
  try { return new Set(JSON.parse(localStorage.getItem(HOME_SPACE_OPEN_KEY) || '[]')); }
  catch { return new Set(); }
}
function saveHomeOpen(set) {
  try { localStorage.setItem(HOME_SPACE_OPEN_KEY, JSON.stringify(Array.from(set))); } catch {}
}
const SPACE_COLORS = ['#4f8cff', '#a855f7', '#10b981', '#f59e0b', '#ec4899', '#06b6d4', '#f97316', '#14b8a6'];
const ITEM_TYPE_META = {
  list:    { color: '#a855f7', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>' },
  meeting: { color: '#f97316', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>' },
  visit:   { color: '#10b981', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m22 2-7 20-4-9-9-4z"/><path d="M22 2 11 13"/></svg>' },
  journal: { color: '#14b8a6', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>' },
  finance: { color: '#eab308', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 10h18"/></svg>' },
  purchases: { color: '#ec4899', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.7 13.4a2 2 0 0 0 2 1.6h9.7a2 2 0 0 0 2-1.6L23 6H6"/></svg>' },
  links:   { color: '#06b6d4', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7 0l3-3a5 5 0 0 0-7-7l-1 1"/><path d="M14 11a5 5 0 0 0-7 0l-3 3a5 5 0 0 0 7 7l1-1"/></svg>' },
  reviews: { color: '#8b5cf6', svg: '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 9 9l-7 1 5 5-1 7 6-3 6 3-1-7 5-5-7-1z"/></svg>' },
};

function spaceItemTitle(item) {
  if (item.type === 'list') {
    const r = (state.robots || []).find(x => x.id === item.refId);
    return r && r.name ? r.name : 'List';
  }
  if (item.type === 'meeting') {
    const m = (state.meetings || []).find(x => x.id === item.refId);
    return m && m.title ? m.title : 'Meeting';
  }
  if (item.type === 'visit') {
    const v = (state.fieldVisits || []).find(x => x.id === item.refId);
    return v && v.location ? v.location : 'Visit';
  }
  if (item.type === 'journal') return 'Journal';
  if (item.type === 'finance') return 'Expenses';
  if (item.type === 'purchases') return 'Purchases';
  if (item.type === 'links')   return 'Links';
  if (item.type === 'reviews') return 'Reviews';
  return item.type;
}

function renderHome() {
  // Today summary
  const subEl = document.getElementById('home-today-sub');
  if (subEl) {
    const s = computeStreakStats();
    subEl.textContent = s.overdueOrToday > 0
      ? `${s.overdueOrToday} task${s.overdueOrToday === 1 ? '' : 's'} due now`
      : 'No tasks due today — nice';
  }

  // Recents
  const recentsEl = document.getElementById('home-recents');
  if (recentsEl) {
    const robots = (state.robots || []).slice();
    const lastActivity = (r) => {
      let t = r.createdAt || 0;
      (r.tasks || []).forEach(task => { if ((task.createdAt || 0) > t) t = task.createdAt; if ((task.completedAt || 0) > t) t = task.completedAt; });
      return t;
    };
    robots.sort((a, b) => lastActivity(b) - lastActivity(a));
    const top = robots.slice(0, 5);
    if (!top.length) {
      recentsEl.innerHTML = '<div class="home-list-empty">No lists yet. Tap + to create your first.</div>';
    } else {
      recentsEl.innerHTML = top.map((r, i) => `
        <button class="home-list-item" data-robot-id="${escapeAttr(r.id)}" type="button">
          <span class="home-list-item-icon" style="--c: ${SPACE_COLORS[i % SPACE_COLORS.length]};">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>
          </span>
          <span class="home-list-item-body">
            <span class="home-list-item-title">${escapeHtml(r.name || 'Untitled')}</span>
            <span class="home-list-item-sub">${(r.tasks || []).filter(t => t.status !== 'done').length} open</span>
          </span>
        </button>
      `).join('');
      recentsEl.querySelectorAll('[data-robot-id]').forEach(el => {
        el.addEventListener('click', () => homeOpenRobot(el.dataset.robotId));
      });
    }
  }

  // Spaces tree (drawer) — 3-level: Space → Type group → Items
  const spacesEl = document.getElementById('home-spaces');
  if (spacesEl) {
    const open = loadHomeOpen();
    const spaces = state.spaces || [];
    const TYPE_LABEL = {
      list: 'Lists', meeting: 'Meetings', visit: 'Visits',
      journal: 'Journals', finance: 'Expenses',
      purchases: 'Purchases', links: 'Links', reviews: 'Reviews',
    };
    const TYPE_ORDER = ['list', 'meeting', 'visit', 'journal', 'finance', 'purchases', 'links', 'reviews'];

    spacesEl.innerHTML = spaces.map((sp, i) => {
      const color = SPACE_COLORS[i % SPACE_COLORS.length];
      const isOpen = open.has(sp.id);
      const items = sp.items || [];
      // Bucket by type
      const byType = {};
      items.forEach(it => { (byType[it.type] = byType[it.type] || []).push(it); });

      const groupsHtml = TYPE_ORDER.filter(t => byType[t] && byType[t].length).map(t => {
        const meta = ITEM_TYPE_META[t] || ITEM_TYPE_META.list;
        const groupKey = sp.id + ':' + t;
        const groupOpen = open.has(groupKey);
        const itemsHtml = byType[t].map(it => `
          <button class="home-space-item" data-space-id="${escapeAttr(sp.id)}" data-item-id="${escapeAttr(it.id)}" type="button">
            <span class="home-space-item-icon" style="--c: ${meta.color};">${meta.svg}</span>
            <span class="home-space-item-name">${escapeHtml(spaceItemTitle(it))}</span>
          </button>
        `).join('');
        return `
          <div class="home-type-group ${groupOpen ? 'open' : ''}">
            <button class="home-type-head" type="button" data-toggle="${escapeAttr(groupKey)}">
              <span class="home-type-label">${TYPE_LABEL[t] || t}</span>
              <span class="home-type-count">${byType[t].length}</span>
            </button>
            <div class="home-type-items">${itemsHtml}</div>
          </div>
        `;
      }).join('');

      return `
        <div class="home-space ${isOpen ? 'open' : ''}" data-space-id="${escapeAttr(sp.id)}">
          <button class="home-space-head" type="button" data-toggle="${escapeAttr(sp.id)}">
            <span class="home-space-icon" style="--c: ${color};">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 5h7l2 2h9v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><path d="M3 9h18"/></svg>
            </span>
            <span class="home-space-body">
              <span class="home-space-name">${escapeHtml(sp.name)}</span>
              <span class="home-space-meta">${items.length} item${items.length === 1 ? '' : 's'}</span>
            </span>
            <svg class="home-space-chev" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 6 6 6-6 6"/></svg>
          </button>
          <div class="home-space-items">
            ${groupsHtml || '<div class="home-list-empty" style="padding: 6px 4px;">Empty space.</div>'}
            <button class="home-space-item-add" data-add-space="${escapeAttr(sp.id)}" type="button">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14M5 12h14"/></svg>
              <span>Add to ${escapeHtml(sp.name)}</span>
            </button>
          </div>
        </div>
      `;
    }).join('');
    // Bind handlers
    spacesEl.querySelectorAll('[data-toggle]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.toggle;
        const open = loadHomeOpen();
        if (open.has(sid)) open.delete(sid); else open.add(sid);
        saveHomeOpen(open);
        const wrap = btn.closest('.home-space, .home-type-group');
        if (wrap) wrap.classList.toggle('open');
      });
    });
    spacesEl.querySelectorAll('[data-item-id]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.spaceId;
        const iid = btn.dataset.itemId;
        if (typeof selectSpaceItem === 'function') selectSpaceItem(sid, iid);
        setBnavActiveFor(null);
        closeSpacesDrawer();
      });
    });
    spacesEl.querySelectorAll('[data-add-space]').forEach(btn => {
      btn.addEventListener('click', () => {
        const sid = btn.dataset.addSpace;
        if (typeof openAddItemPicker === 'function') openAddItemPicker(sid);
      });
    });
  }
}

// Spaces drawer (left slide-in, opened by the hamburger on Home)
function openSpacesDrawer() {
  document.body.classList.add('spaces-drawer-open');
  // Re-render so the tree reflects the latest data (new items, etc.)
  renderHome();
}
function closeSpacesDrawer() {
  document.body.classList.remove('spaces-drawer-open');
}

function homeOpenRobot(rid) {
  let spaceId = null, itemId = null;
  (state.spaces || []).forEach(s => (s.items || []).forEach(it => {
    if (it.type === 'list' && it.refId === rid) { spaceId = s.id; itemId = it.id; }
  }));
  if (spaceId && itemId && typeof selectSpaceItem === 'function') selectSpaceItem(spaceId, itemId);
  else { state.currentRobotId = rid; activateSection('robots'); renderRobotList(); renderRobotDetail(); }
  setBnavActiveFor(null);
}

function homeNavigate(target) {
  if (target === 'today')          showCrossView('today');
  else if (target === 'calendar')  showCrossView('calendar');
  else if (target === 'all-tasks') showCrossView('all-tasks');
  else if (target === 'visits')    showCrossView('visits');
  else if (target === 'search')    openSearchModal();
  else if (target === 'add')       openQuickCapture();
  else if (target === 'calc')      (typeof openCalculatorsModal === 'function') && openCalculatorsModal();
  else if (target === 'more')      { activateSection('more'); setBnavActiveFor('more'); }
}

// Inbox = today/overdue tasks list (single source of "what's on me now")
function renderInbox() {
  const list = document.getElementById('inbox-list');
  if (!list) return;
  const today = new Date(); today.setHours(0,0,0,0);
  const items = [];
  (state.robots || []).forEach(r => {
    (r.tasks || []).forEach(task => {
      if (task.status === 'done' || !task.dueDate) return;
      const d = new Date(task.dueDate + 'T00:00:00');
      if (d <= today) items.push({ task, project: r });
    });
  });
  // Update pill badge
  const badge = document.getElementById('inbox-badge');
  if (badge) {
    if (items.length) { badge.textContent = items.length > 99 ? '99+' : String(items.length); badge.classList.add('has'); }
    else { badge.textContent = ''; badge.classList.remove('has'); }
  }
  if (!items.length) {
    list.innerHTML = '<div class="home-list-empty" style="padding: 32px 16px;">Inbox zero — nothing waiting on you.</div>';
    return;
  }
  list.innerHTML = items.map(it => `
    <button class="home-list-item" data-pid="${escapeAttr(it.project.id)}" data-tid="${escapeAttr(it.task.id)}" type="button">
      <span class="home-list-item-icon" style="--c: #ff6b6b;">
        <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/></svg>
      </span>
      <span class="home-list-item-body">
        <span class="home-list-item-title">${escapeHtml(it.task.title)}</span>
        <span class="home-list-item-sub">${escapeHtml(it.project.name || 'List')} · ${escapeHtml(it.task.dueDate)}</span>
      </span>
    </button>
  `).join('');
  list.querySelectorAll('[data-pid]').forEach(el => {
    el.addEventListener('click', () => {
      if (typeof goToTask === 'function') goToTask(el.dataset.pid, el.dataset.tid);
    });
  });
}
function openInbox() {
  state.currentItemId = null;
  activateSection('inbox');
  setBnavActiveFor('inbox');
  renderInbox();
}

function openHome() {
  state.currentItemId = null;
  if (typeof activateSection === 'function') activateSection('home');
  setBnavActiveFor('home');
  renderHome();
}
// Refresh the inbox badge count regardless of which section is showing
function refreshInboxBadge() {
  const badge = document.getElementById('inbox-badge');
  if (!badge) return;
  const today = new Date(); today.setHours(0,0,0,0);
  let count = 0;
  (state.robots || []).forEach(r => (r.tasks || []).forEach(task => {
    if (task.status === 'done' || !task.dueDate) return;
    const d = new Date(task.dueDate + 'T00:00:00');
    if (d <= today) count++;
  }));
  if (count) { badge.textContent = count > 99 ? '99+' : String(count); badge.classList.add('has'); }
  else { badge.textContent = ''; badge.classList.remove('has'); }
}
document.getElementById('bnav-home-btn')?.addEventListener('click', openHome);
document.getElementById('bnav-inbox-btn')?.addEventListener('click', openInbox);
document.getElementById('bnav-mytasks-btn')?.addEventListener('click', () => { showCrossView('all-tasks'); setBnavActiveFor('all-tasks'); });
document.getElementById('home-search-pill')?.addEventListener('click', () => openSearchModal());
document.getElementById('home-today-card')?.addEventListener('click', () => showCrossView('today'));
document.getElementById('home-add-space-btn')?.addEventListener('click', () => {
  if (typeof addSpace === 'function') { addSpace(); renderHome(); }
});
document.getElementById('home-spaces-search-btn')?.addEventListener('click', () => openSearchModal());
document.getElementById('home-burger-btn')?.addEventListener('click', openSpacesDrawer);
document.getElementById('spaces-drawer-backdrop')?.addEventListener('click', closeSpacesDrawer);
document.getElementById('drawer-search-btn')?.addEventListener('click', () => { closeSpacesDrawer(); openSearchModal(); });
document.getElementById('drawer-add-space-btn')?.addEventListener('click', () => {
  if (typeof addSpace === 'function') { addSpace(); renderHome(); }
});
document.querySelectorAll('[data-home-go]').forEach(b => {
  b.addEventListener('click', () => homeNavigate(b.dataset.homeGo));
});

document.querySelectorAll('.theme-toggle-btn').forEach(b => {
  b.addEventListener('click', () => setTheme(b.dataset.themeSet));
});

// Version is rendered straight into index.html so it shows even if app.js
// errors out. JS-side override kept here as a safety net for future bumps.
const APP_VERSION = '5.9.0';
const _verEl = document.getElementById('more-version');
if (_verEl) _verEl.textContent = 'B-Less Planner v' + APP_VERSION;

// Default landing view: Home grid (colorful card overview of every section)
openHome();

// First-run welcome modal
maybeShowWelcome();
maybeShowBrief();
